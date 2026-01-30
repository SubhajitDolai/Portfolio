"use client";

import React, { useEffect, useState } from "react";

const STORAGE_KEY = "subhajit_portfolio_first_visit_shown";
const MIN_MS = 600; // minimum time to show loader so it's visible

export default function FirstLoadLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mounted = true;
    try {
      const shown = localStorage.getItem(STORAGE_KEY);
      if (shown) return; // already shown before
      setVisible(true);
      const start = Date.now();

      const finish = () => {
        const elapsed = Date.now() - start;
        const delay = elapsed < MIN_MS ? MIN_MS - elapsed : 0;
        setTimeout(() => {
          if (!mounted) return;
          setVisible(false);
          try {
            localStorage.setItem(STORAGE_KEY, "1");
          } catch (e) {
            // ignore
          }
        }, delay);
      };

      if (document.readyState === "complete") {
        finish();
      } else {
        window.addEventListener("load", finish, { once: true });
        // fallback in case load never fires
        const fallback = setTimeout(finish, 5000);
        return () => {
          mounted = false;
          window.removeEventListener("load", finish);
          clearTimeout(fallback);
        };
      }
    } catch (e) {
      // if localStorage is blocked/throws, show briefly
      setVisible(true);
      const t = setTimeout(() => setVisible(false), MIN_MS);
      return () => clearTimeout(t);
    }

    return () => {
      mounted = false;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <svg
          className="w-12 h-12 text-foreground animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        <div className="text-sm text-muted-foreground">Loading…</div>
      </div>
    </div>
  );
}
