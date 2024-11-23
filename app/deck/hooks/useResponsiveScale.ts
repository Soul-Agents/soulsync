import { useState, useEffect } from "react";

export const useResponsiveScale = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const widthScale = width / 1280;
      const heightScale = height / 800;

      console.log(
        "Width:",
        width,
        "Height:",
        height,
        "Scale:",
        Math.min(widthScale, heightScale, 1),
      );

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
