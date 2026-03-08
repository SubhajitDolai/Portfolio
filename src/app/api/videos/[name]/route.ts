import { NextRequest, NextResponse } from "next/server";

// Whitelist: only these video names are allowed through the proxy
const VIDEO_MAP: Record<string, string> = {
  courtside:
    "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/courtside.mp4",
  campusbook:
    "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/campusbook.mp4",
  rise: "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/rise.mp4",
  digitalid:
    "https://kvxwmhgtcjhauutebzuo.supabase.co/storage/v1/object/public/videos/digitalid.mp4",
};

// Tell Vercel CDN to cache these responses for 1 year
export const revalidate = 31536000;

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ name: string }> }
) {
  const { name } = await context.params;
  const upstreamUrl = VIDEO_MAP[name];

  if (!upstreamUrl) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Forward Range header so video seeking works correctly
  const upstreamHeaders: HeadersInit = {};
  const range = request.headers.get("range");
  if (range) {
    upstreamHeaders["range"] = range;
  }

  let upstream: Response;
  try {
    upstream = await fetch(upstreamUrl, { headers: upstreamHeaders });
  } catch {
    return new NextResponse("Failed to fetch video", { status: 502 });
  }

  if (!upstream.ok && upstream.status !== 206) {
    return new NextResponse("Upstream error", { status: upstream.status });
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", "video/mp4");
  responseHeaders.set("Accept-Ranges", "bytes");
  // Cache at Vercel CDN edge for 1 year; browsers cache for 1 day
  responseHeaders.set(
    "Cache-Control",
    "public, s-maxage=31536000, max-age=86400, stale-while-revalidate=86400"
  );

  // Forward byte-range metadata so the browser can seek
  const contentRange = upstream.headers.get("content-range");
  if (contentRange) responseHeaders.set("Content-Range", contentRange);
  const contentLength = upstream.headers.get("content-length");
  if (contentLength) responseHeaders.set("Content-Length", contentLength);

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
