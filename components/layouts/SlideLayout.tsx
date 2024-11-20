import { motion } from "framer-motion";
import React from "react";

interface SlideLayoutProps {
  title: string;
  slideNumber: number;
  children: React.ReactNode;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  title,
  slideNumber,
  children,
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col p-8">
      <div className="relative mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            {title}
          </h2>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="glass-card px-4 py-2 rounded-full border border-electric-purple/20">
            <span className="text-sm font-medium">
              <span className="text-white/40">Slide </span>
              <span className="gradient-text font-bold">{slideNumber}</span>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
};
