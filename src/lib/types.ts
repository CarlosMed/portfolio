import { ReactNode } from "react";

export type SectionProps = {
  title: string;
  children: ReactNode;
  className: string;
  anchorName: string;
  className?: string;
};

export type WorkListProp = {
  id: number;
  name: string;
  year: string;
};
