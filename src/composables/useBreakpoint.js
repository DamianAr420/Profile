import { useState, useEffect } from "react";

const TAILWIND_MD_BREAKPOINT = 768;

const useBreakpoint = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: width < TAILWIND_MD_BREAKPOINT,
  };
};

export default useBreakpoint;
