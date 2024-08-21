import { SectionProps } from "@/lib/types";
import React from "react";

export default function Section({
  title,
  children,
  className,
  anchorName,
}: SectionProps) {
  return (
    <section className={className} id={anchorName}>
      {title && (
        <h3 className="font-khand text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
