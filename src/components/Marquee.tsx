import React from "react";
import { CgFigma, CgFramer } from "react-icons/cg";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import {
  RiGithubFill,
  RiNextjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPayloadcms } from "react-icons/si";

export default function Marquee() {
  return (
    <div className="scroll">
      <IoLogoVercel className="logo" />
      <RiTailwindCssFill className="logo" />
      <RiNextjsFill className="logo" />
      <RiReactjsLine className="logo" />
      <RiGithubFill className="logo" />
      <IoLogoVercel className="logo" />
      <RiTailwindCssFill className="logo" />
      <RiNextjsFill className="logo" />
      <RiReactjsLine className="logo" />
      <RiGithubFill className="logo" />
    </div>
  );
}
