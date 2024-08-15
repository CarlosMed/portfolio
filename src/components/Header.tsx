import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function Header() {
  const splineURL =
    "https://prod.spline.design/mEE-w4CRl4kX4lll/scene.splinecode";
  return (
    <header className="mb-5 space-y-6">
      <h2 className="font-khand text-[clamp(4.85rem,20vw,50rem)] font-bold leading-none tracking-tight">
        Carlos Medina
      </h2>
      <section className="grid space-y-6 px-4 md:grid-cols-2 md:grid-rows-2">
        <h1 className="md: text-4xl md:text-[clamp(5rem,5vw,50rem)]">
          Digital Painter for the WWW.eb{" "}
        </h1>
        <p className="text-sm">
          An experienced pixel pushing partner for global brands. Creating one
          hell of a masterpiece through design and development.
        </p>
        <Spline scene={splineURL} className="rounded-md md:col-span-2" />
      </section>
    </header>
  );
}
