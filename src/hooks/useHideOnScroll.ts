"use client";

import { useRef, useState, useLayoutEffect } from "react";

export function useHideOnScroll({
  threshold = 50,       // how far to scroll before hiding
  mobileOnly = false,    // hide only on mobile screens
} = {}) {

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [hidden, setHidden] = useState(false);


  useLayoutEffect(() => {
    const isMobile = () => window.innerWidth <= 768;

    const update = () => {
      const currentY = window.scrollY;

      if (mobileOnly && !isMobile()) {
        setHidden(false);
        lastScrollY.current = currentY;
        ticking.current = false;
        return;
      }

      // Only hide after threshold scroll
      if (Math.abs(currentY - lastScrollY.current) > threshold) {
        if (currentY > lastScrollY.current) {
          setHidden(true);   // scrolling down → hide
        } else {
          setHidden(false);  // scrolling up → show
        }
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, mobileOnly]);

  return hidden;
}
