import { useState, useEffect } from "react";

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < 768;

      if (isMobile) {
        // More aggressive scaling for mobile
        const mobileScale = Math.min(width / 1280, height / 720) * 0.45; // 45% of normal scale
        setScale(mobileScale);
      } else {
        // Desktop scaling remains the same
        const widthScale = width / 1280;
        const heightScale = height / 720;
        setScale(Math.min(widthScale, heightScale, 1));
      }

      document.documentElement.style.setProperty(
        "--current-scale",
        scale.toString()
      );
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}
