import { SectionProps } from "@/utils/types";
import React from "react";

export default function Section({
  title,
  children,
  className,
  anchorName,
}: SectionProps) {
  return (
    <section className={className} id={anchorName}>
      <h3 className="font-khand text-4xl font-medium tracking-tight">
        {title}
      </h3>
      {children}
    </section>
  );
}
