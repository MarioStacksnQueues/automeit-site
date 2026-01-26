import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // allow DOM to paint
    requestAnimationFrame(() => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // no hash (or element not found) -> go to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, [location]);

  return null;
}
