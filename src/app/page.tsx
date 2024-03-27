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

const portfolioList = [
  {
    title: "Life Made",
    description: "A web app to help people with disabilities.",
    url: "https://lifemade.com",
    localURL: "/lifemade",
    category: "Website",
    imageUrl: "https://picsum.photos/400",
  },
  {
    title: "Trailer Store",
    description: "A web app to help people with disabilities.",
    url: "https://trailerstore.com",
    localURL: "/trailerstore",
    category: "Website",
    imageUrl: "https://picsum.photos/400",
  },
  {
    title: "SAF Technologies",
    description: "A web app to help people with disabilities.",
    url: "https://saftech.com",
    localURL: "/saftech",
    category: "Website",
    imageUrl: "https://picsum.photos/400",
  },
];

export default function Home() {
  return (
    <main className="flex flex-grow flex-col space-y-5">
      <section className="flex justify-between">
        <Detail key={openFor.title} title={openFor.title} list={openFor.list} />
        <Detail key={myStack.title} title={myStack.title} list={myStack.list} />
      </section>
      <About />
      <section className="flex items-center justify-between">
        <Detail key={forFun.title} title={forFun.title} list={forFun.list} />
        <PortfolioSimpleCard portfolioList={portfolioList} />
        <h2 className="font font-bold text-tan xs:hidden">Portfolio</h2>
      </section>
      <Portfolio />
    </main>
  );
}
