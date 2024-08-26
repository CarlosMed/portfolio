import { usePlausible } from "next-plausible";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Button() {
  const plausible = usePlausible();
  return (
    <Link
      onClick={() => plausible("BtnClick: View Resume")}
      href="Carlos_Medina_Resume.pdf"
      target="_blank"
      download
      className="flex items-center justify-center space-x-2 rounded-lg bg-darkGreen px-4 py-3 text-xs tracking-wide text-white/90 hover:space-x-3 hover:bg-darkGreen/90 hover:text-white/100"
    >
      <span>View My Resume</span>
      <FaArrowRight />
    </Link>
  );
}
