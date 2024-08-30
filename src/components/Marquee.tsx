"use client";
import { MarqueeProps } from "@/lib/types";
import { motion } from "framer-motion";

export default function Marquee({ children, duration }: MarqueeProps) {
  return (
    <motion.div
      className="flex w-fit"
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
  );
}
