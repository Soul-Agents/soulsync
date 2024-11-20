import { useState, useEffect } from "react";

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Base size that we're designing for
      const baseWidth = 1280;
      const baseHeight = 720;

      // Calculate scale based on both dimensions
      const widthScale = width / baseWidth;
      const heightScale = height / baseHeight;

      // Use the smaller scale to ensure content fits
      const newScale = Math.min(widthScale, heightScale, 1);

      document.documentElement.style.setProperty(
        "--current-scale",
        newScale.toString(),
      );
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}
