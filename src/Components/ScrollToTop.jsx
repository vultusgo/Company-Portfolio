import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on route change, or to the #hash target when one is present
 * (so <Link to="/#services"> works without a full page reload).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait a frame so the destination route has rendered
      const id = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
