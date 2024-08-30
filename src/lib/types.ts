import { ReactNode } from "react";

export type SectionProps = {
  title?: string;
  children: ReactNode;
  className?: string;
  anchorName?: string;
};

export type WorkListProp = {
  id: number;
  name: string;
  year: string;
};

export type MarqueeProps = {
  children: SectionProps["children"];
  duration: number;
};
