import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { WORK_LIST } from "@/lib/constants";
import About from "@/components/about/About";
import Marquee from "@/components/Marquee";

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

export default function Home() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <div className="flex flex-col items-center justify-between space-y-5 lg:flex-row lg:space-x-16 lg:space-y-20">
          <Section
            title={"Who"}
            anchorName="about"
            className="space-y-4 text-sm md:mt-5 lg:max-w-md"
          >
            <About />
          </Section>
          <Section className="flex w-full max-w-xl flex-col space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] lg:max-w-3xl lg:space-y-20">
            <Marquee duration={12}>
              <IoLogoVercel className="logo" />
              <RiTailwindCssFill className="logo" />
              <RiNextjsFill className="logo" />
              <RiReactjsLine className="logo" />
              <RiGithubFill className="logo" />
            </Marquee>
            <Marquee duration={8}>
              <SiPayloadcms className="logo" />
              <FaGitAlt className="logo" />
              <CgFramer className="logo" />
              <CgFigma className="logo" />
              <RiGithubFill className="logo" />
            </Marquee>
          </Section>
        </div>
        <Section title="Why" className="space-y-8" anchorName="work">
          <div className="space-y-8 md:grid md:grid-cols-2 md:justify-stretch md:gap-4 md:space-y-0 lg:gap-8">
            {WORK_LIST.map(({ id, name, year }) => (
              <Card id={id} name={name} year={year} key={id} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
