"use client";
import React, { useState } from "react";
import { NAV_LIST } from "@/lib/constants";
import Menu from "./Menu";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa6";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={twMerge(
          `is-open fixed bottom-8 z-10 mx-auto flex h-16 w-11/12 max-w-2xl items-center justify-between rounded-md bg-darkGreen px-5 text-white`,
          isOpen && "h-5/6 flex-col py-10",
        )}
      >
        <div className="cursor-pointer" onClick={handleClick}>
          <Menu />
        </div>
        {isOpen && (
          <>
            <div className="relative flex h-1/2 flex-col justify-between">
              {NAV_LIST.map(({ name, href }) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
            </div>
          </>
        )}
        <Button href="Carlos_Medina_Resume.pdf" download>
          View My Resume
        </Button>
        <Button
          href="mailto:carlos.w.med@gmail.com"
          className="rounded-sm bg-tan px-4 py-2 font-semibold text-darkGreen"
          external
        >
          Contact Me
        </Button>
      </nav>
    </>
  );
}
