import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function Header() {
  const splineURL =
    "https://prod.spline.design/mEE-w4CRl4kX4lll/scene.splinecode";
  return (
    <header className="mb-5 space-y-6">
      <h2 className="font-khand text-[clamp(4.85rem,10vw,5rem)] font-bold leading-none tracking-tight">
        Carlos Medina
      </h2>
      <section className="space-y-6 px-4">
        <h1 className="text-4xl">Digital Painter for the WWW.eb </h1>
        <p className="text-sm">
          An experienced pixel pushing partner for global brands. Creating one
          hell of a masterpiece through design and development.
        </p>
        <Spline scene={splineURL} className="rounded-md" />
      </section>
    </header>
  );
}
