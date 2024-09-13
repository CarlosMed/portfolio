import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function InternalButton(props, plausible) {
  const { href, className, icon, children, external, download, showIcon } =
    props.props;
  return (
    <Link
      onClick={() => plausible("BtnClick: View Resume")}
      href={href}
      target="_blank"
      download={href}
      className={twMerge(
        className,
        "flex items-center justify-center space-x-2 rounded-lg bg-darkGreen px-4 py-3 text-xs tracking-wide text-white/90 hover:space-x-3 hover:bg-darkGreen/90 hover:text-white/100",
      )}
    >
      <span>{children}</span>
      {showIcon && icon}
    </Link>
  );
}
