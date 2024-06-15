import Detail from "@/components/detail/Detail";
import Portfolio from "@/components/portfolio/Portfolio";
import useFetch from "@/utils/useFetch";

const openFor = {
  title: "I'm Open For",
  list: [
    "Design",
    "Creative",
    "Frontend",
    "Freelance",
    "Collaboration",
    "Volunteering",
    "Special Projects",
  ],
};

const myStack = {
  title: "My Stack",
  list: [
    "HTML",
    "CSS",
    "JS/TS",
    "Git",
    "Alexa",
    "React/Next.js",
    "Headless CMS",
  ],
};

const forFun = {
  title: "4 Fun",
  list: ["Figma", "Games", "Virtualization", "Home Automation"],
};

export default async function Home() {
  const portfolioList = await useFetch(`${process.env.NEXT_PUBLIC_API_URL}/api/portfolios`);

  return (
    <>
      <section className="items-center justify-between space-y-4 md:flex md:flex-row-reverse">
        <div className="flex grow justify-between md:max-w-lg md:rounded-2xl md:bg-olive md:p-8 md:text-eggshell">
          <Detail key={openFor.title} title={openFor.title} list={openFor.list} />
          <Detail key={myStack.title} title={myStack.title} list={myStack.list} />
          <div className="hidden md:block">
            <Detail key={forFun.title} title={forFun.title} list={forFun.list} />
          </div>
        </div>
        <div className="space-y-2 rounded-md bg-olive p-4 text-xs leading-relaxed text-eggshell md:max-w-sm md:space-y-4 md:bg-eggshell md:text-sm md:text-olive lg:max-w-xl">
          <p> A passionate <span className="font-bold text-tan">Fullstack Engineer at Method</span> (not the soap company), a boutique consultancy agency specializing in innovative tech solutions.
          </p>
          <p className="hidden md:block">With a keen eye for detail and an eye for frontend development, I thrive in crafting seamless user experiences while architecting robust backend systems.</p>
          <p className="hidden lg:block">
            Beyond coding, I embrace a collaborative approach, thriving in dynamic teams where knowledge sharing and innovation flourish. I&apos;m constantly exploring new technologies and seeking to push the boundaries of what&apos;s possible in the digital landscape. I have had the great pleasure in working on a diverse background collaboration with top industry leaders.
          </p>
        </div>
      </section>
      <Portfolio portfolioList={portfolioList} />
    </>
  );
}
