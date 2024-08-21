import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { WORK_LIST } from "@/lib/constants";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full space-y-5 px-4 lg:space-y-44 lg:px-10">
          <Section title={"Who"} anchorName="about">
            <About />
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
