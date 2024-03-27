import { PortfolioProps } from "./Portfolio";

export default function PortfolioSimpleCard({
  portfolioList,
}: {
  portfolioList: PortfolioProps[];
}) {
  return (
    <section className={`mb-4 hidden rounded-lg bg-olive p-4 xs:block`}>
      <h2 className="mb-1 font-bold text-tan">Portfolio</h2>
      {portfolioList.map(({ localURL, title }) => (
        <a href={localURL} key={title} className="text-xs text-eggshell">
          <p>{title}</p>
        </a>
      ))}
    </section>
  );
}
