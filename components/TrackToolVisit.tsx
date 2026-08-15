"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordToolVisit } from "@/lib/recently-used-tools";

export default function TrackToolVisit() {
  const pathname = usePathname();

  useEffect(() => {
    const match = pathname?.match(/^\/tools\/([^/]+)$/);
    if (match) {
      recordToolVisit(match[1]);
    }
  }, [pathname]);

  return null;
}
