import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function Header() {
  const splineURL =
    "https://prod.spline.design/mEE-w4CRl4kX4lll/scene.splinecode";
  return (
    <header className="mb-5 space-y-6">
      <h2 className="text-center font-khand text-[clamp(4rem,20vw,50rem)] font-bold leading-none tracking-tight">
        Carlos Medina
      </h2>
      <section className="space-y-6 px-4 lg:px-10">
        <div className="flex flex-col space-y-6 md:flex-row md:items-end md:justify-between md:space-x-8">
          <h1 className="max-w-[16rem] text-3xl font-medium leading-9 md:max-w-96 md:text-5xl md:leading-tight lg:max-w-[36rem] lg:text-7xl lg:leading-tight">
            Digital Painter for the WWW.eb
          </h1>
          <p className="text-sm md:max-w-[18rem]">
            An experienced pixel pushing partner for global brands. Creating one
            hell of a masterpiece through design and development.
          </p>
        </div>
        <Spline scene={splineURL} className="col-span-full rounded-md" />
      </section>
    </header>
  );
}
