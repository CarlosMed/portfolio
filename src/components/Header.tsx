import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function Header() {
  const splineURL =
    "https://prod.spline.design/mEE-w4CRl4kX4lll/scene.splinecode";
  return (
    <header className="wrapper">
      <section className="flex flex-col space-y-6 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-medium leading-tight md:max-w-96 md:text-5xl md:leading-tight lg:max-w-[36rem] lg:text-7xl lg:leading-tight">
          Digital Painter for the WWW.eb
        </h2>
        <p className="text-sm md:max-w-[18rem]">
          An experienced pixel pushing partner for global brands. Creating one
          hell of a masterpiece through design and development.
        </p>
      </section>
      <Spline scene={splineURL} className="col-span-full rounded-md" />
    </header>
  );
}
