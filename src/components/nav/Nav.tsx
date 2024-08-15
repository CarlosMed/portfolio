import React from "react";
import { NAV_LIST } from "@/lib/constants";

export default function Nav() {
  return (
    <>
      <div className="fixed bottom-8 m-auto mx-auto flex h-16 w-11/12 items-center justify-around rounded-md bg-darkGreen text-white ">
        {NAV_LIST.map(({ name, href }) => (
          <a href={href} key={name}>
            {name}
          </a>
        ))}
        <a
          href="mailto:carlos.w.med@gmail.com"
          className="rounded-sm bg-tan px-4 py-2 font-semibold text-darkGreen"
        >
          Contact Me
        </a>
      </div>
    </>
  );
}
