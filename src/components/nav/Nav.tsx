import React from "react";
import { NAV_LIST } from "@/lib/constants";

export default function Nav() {
  return (
    <>
      <nav className="fixed bottom-8 z-10 mx-auto flex h-16 w-11/12 max-w-2xl items-center justify-between rounded-md bg-darkGreen px-5 text-white">
        <div className="space-x-12">
          {NAV_LIST.map(({ name, href }) => (
            <a href={href} key={name}>
              {name}
            </a>
          ))}
        </div>
        <a
          href="mailto:carlos.w.med@gmail.com"
          className="rounded-sm bg-tan px-4 py-2 font-semibold text-darkGreen"
        >
          Contact Me
        </a>
      </nav>
    </>
  );
}
