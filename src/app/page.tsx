import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { WORK_LIST } from "@/lib/constants";
import About from "@/components/about/About";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full space-y-5 px-4 lg:space-y-44 lg:px-10">
        <div className="items-center space-x-5 md:flex">
          <Section title={"Who"} anchorName="about">
            <About />
          </Section>
          <Section className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] md:max-w-96">
            <Marquee />
          </Section>
        </div>
        <Section title="Why" className="space-y-8" anchorName="work">
          <div className="space-y-8">
            {WORK_LIST.map(({ id, name, year }) => (
              <Card id={id} name={name} year={year} key={id} />
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
