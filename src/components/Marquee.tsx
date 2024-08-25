"use client";
import { motion } from "framer-motion";

export default function Marquee({ children, duration }) {
  return (
    <div className="flex ">
      <motion.div
        className="flex "
        animate={{ x: `-50%` }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="marquee">{children}</div>
        <div className="marquee">{children}</div>
      </motion.div>
    </div>
  );
}
