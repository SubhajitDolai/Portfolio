import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import JsonLd from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/next';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const siteStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    sameAs: Object.values(DATA.contact.social).map((s) => s.url),
    jobTitle: DATA.work?.[0]?.title || undefined,
    worksFor: DATA.work?.[0]
      ? {
          "@type": "Organization",
          name: DATA.work[0].company,
          url: DATA.work[0].href,
        }
      : undefined,
    alumniOf: DATA.education?.[0]?.school || undefined,
    knowsAbout: DATA.skills?.map((s: any) => s.name) || undefined,
    email: DATA.contact?.email || undefined,
    telephone: DATA.contact?.tel || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.location,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DATA.name,
    url: DATA.url,
    description: DATA.description,
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    images: [
      {
        url: `${DATA.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@subhajitdolai",
    creator: "@subhajitdolai",
    title: `${DATA.name}`,
    description: DATA.description,
    images: [`${DATA.url}/opengraph-image`],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
              <JsonLd data={siteStructuredData} />
              <Analytics />
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
