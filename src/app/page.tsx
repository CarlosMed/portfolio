import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { WORK_LIST } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full space-y-5 px-4 lg:space-y-44 lg:px-10">
        <Section title={"Who"} anchorName="about">
          <div className="mt-2 space-y-4 text-sm md:mt-5 md:max-w-96">
            <p>
              A passionate fullstack senior engineer at Method (not the soap
              company), a boutique consultancy agency specializing in innovative
              tech solutions.
            </p>
            <p>
              With a keen eye for detail and an eye for frontend development, I
              thrive in crafting seamless user experiences while architecting
              robust backend systems.
            </p>
            <p>
              I&apos;m constantly exploring new technologies and seeking to push
              the boundaries of what&apos;s possible in the digital landscape. I
              have had the great pleasure in working on a diverse background
              collaboration with top industry leaders.
            </p>
          </div>
        </Section>
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
