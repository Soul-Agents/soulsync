import { useState, useEffect } from "react";

export const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width <= 768;
      
      if (isMobile) {
        // On mobile, use a more generous scaling factor
        const widthScale = width / 375; // Base width for mobile
        const heightScale = height / 667; // Base height for mobile
        return Math.min(widthScale, heightScale, 1.5); // Allow slightly larger scale on mobile
      }
      
      // Desktop scaling remains the same
      const widthScale = width / 1280;
      const heightScale = height / 800;
      return Math.min(widthScale, heightScale, 1);
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
