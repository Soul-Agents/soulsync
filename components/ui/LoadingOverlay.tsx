"use client";

import React from "react";

interface LoadingOverlayProps {
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-electric-purple/30 border-t-electric-purple rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/70">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
