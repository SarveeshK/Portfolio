import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  fullHeight?: boolean;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.2, fullHeight = false }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible", height: fullHeight ? "100%" : "auto" }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: fullHeight ? "100%" : "auto",
          willChange: "transform, opacity",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
