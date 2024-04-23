import About from "@/components/about/About";
import Detail from "@/components/detail/Detail";
import Portfolio from "@/components/portfolio/Portfolio";
import PortfolioSimpleCard from "@/components/portfolio/PortfolioSimpleCard";

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

const fetchPortfolio = async () => {
  const res = await fetch('http://localhost:3000/api/portfolios')
  const data = await res.json();
  return data;
}

export default async function Home() {
  const portfolioList = await fetchPortfolio();

  return (
    <main className="flex flex-grow flex-col space-y-5 md:space-y-8">
      <div className="items-center justify-between space-y-5 md:flex md:flex-row-reverse md:space-y-0">
        <section className="flex max-w-lg grow justify-between rounded-3xl md:bg-olive md:p-8 md:text-eggshell md:space-x-11 md:ml-8">
          <Detail key={openFor.title} title={openFor.title} list={openFor.list} />
          <Detail key={myStack.title} title={myStack.title} list={myStack.list} />
          <div className="hidden md:block">
            <Detail key={forFun.title} title={forFun.title} list={forFun.list} />
          </div>
        </section>
        <About />
      </div>
      <section className="flex items-center justify-between md:hidden">
        <Detail key={forFun.title} title={forFun.title} list={forFun.list} />
        <PortfolioSimpleCard portfolioList={portfolioList} />
        <h2 className="font text-xl font-bold text-tan xs:hidden">Portfolio</h2>
      </section>
      <h2 className="font hidden text-3xl font-bold text-tan md:flex">Portfolio</h2>
      <Portfolio portfolioList={portfolioList} />
    </main>
  );
}
