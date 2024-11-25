import { useState, useEffect } from "react";

export const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;

      if (isMobile) {
        // Mobile scaling
        const widthScale = width / 375;
        const heightScale = height / 667;
        return Math.min(widthScale, heightScale, 1.2);
      }

      // Much more aggressive desktop scaling
      const widthScale = width / 1280;
      const heightScale = height / 800;
      // Using a more aggressive scaling factor of 0.89 as the maximum
      return Math.min(widthScale, heightScale, 0.89);
    };

    const handleResize = () => {
      setScale(calculateScale());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
};
