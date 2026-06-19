"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    feather: any;
    $: any;
  }
}

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace();
      }

      if (window.$) {
        try {
          window.$(".slider-3").slick("refresh");
          window.$(".product-main").slick("refresh");
          window.$(".left-slider").slick("refresh");
        } catch (e) {}
      }
    }, 500);
  }, [pathname]);

  return null;
}