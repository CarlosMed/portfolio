import { ReactNode } from "react";

export type SectionProps = {
  title: string;
  children: ReactNode;
  className: string;
  anchorName: string;
};
