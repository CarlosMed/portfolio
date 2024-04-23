import Image from "next/image";

export type PortfolioProps = {
  title: string;
  localURL: string;
  category?: string;
  url?: string;
  description?: string;
  imageUrl?: string;
  featured?: boolean;
};

export default function Portfolio({ portfolioList }) {
  const featuredPortfolio = portfolioList.find((portfolio: PortfolioProps) => portfolio.featured);
  const otherPortfolio = portfolioList.filter((portfolio: PortfolioProps) => !portfolio.featured);

  console.log(featuredPortfolio.localURL)
  return (
    <section className="flex grow flex-col content-stretch items-stretch space-y-5 md:space-y-8 text-eggshell xs:hidden">
      <a
        href={featuredPortfolio.localURL}
        className="relative flex min-h-[104px] w-full grow items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
      >
        <Image
          src={featuredPortfolio.imageUrl || "https://picsum.photos/400"}
          alt="placeholder"
          fill
          className="object-cover"
        />
        <div className="z-10 text-sm">
          <p className="font-bold">{featuredPortfolio.title}</p>
          <p>{featuredPortfolio.category}</p>
        </div>
      </a>
      <div className="flex grow space-x-5 md:space-x-8">
        {otherPortfolio.map(({title, localURL, category, imageUrl}) =>
          <a
            key={title}
            href={localURL}
            className="relative flex max-h-full min-h-[104px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
          >
            <Image
              src={imageUrl || "https://picsum.photos/400"}
              alt="placeholder"
              fill
              className="object-cover"
            />
            <div className="z-10 text-sm">
              <p className="font-bold">{title}</p>
              <p>{category}</p>
            </div>
          </a>
        )}
      </div>
    </section>
  );
}
