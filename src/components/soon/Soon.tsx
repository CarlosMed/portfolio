"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Soon() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .from("main > p, a", {
          autoAlpha: 0,
          scaleY: 1,
          duration: 2,
          stagger: 3,
          ease: "power2.inOut",
        })
        .from(
          "div > p",
          {
            autoAlpha: 0,
            scaleY: 1,
            duration: 1,
            stagger: +0.3,
            ease: "power2.inOut",
          },
          "<",
        );
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <main
        ref={mainRef}
        className="flex min-h-[100dvh] select-none flex-col items-center justify-between overflow-hidden px-5 py-1 text-[4em] font-bold md:p-10"
      >
        <div className="name flex w-full items-center justify-between font-khand font-bold tracking-tight">
          <p>Carlos</p>
          <p>Medina</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <p className="pl-3 text-2xl font-bold uppercase tracking-[0.75rem]">
            Website
          </p>
          <Link
            href="Carlos_Medina_Resume.pdf"
            target="_blank"
            className="flex items-center justify-center space-x-2 rounded-lg bg-darkGreen px-4 py-3 text-xs tracking-wide text-white/90 hover:space-x-3 hover:bg-darkGreen/90 hover:text-white/100"
          >
            <span>View My Resume</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex w-full items-center justify-between font-khand font-bold tracking-tight">
          <p>Coming</p>
          <p>Soon</p>
        </div>
      </main>
    </>
  );
}
