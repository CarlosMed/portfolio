// @ts-nocheck
// TODO
import useFetch from "@/utils/useFetch";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export type PortfolioProps = {
  title: string;
  localURL: string;
  category?: string;
  url?: string;
  description?: string;
  imageUrl?: string;
  featured?: boolean;
};

export default function Portfolio() {
  const [portfolioList, setPortfolioList] = useState([]);
  const featuredPortfolio = portfolioList.find((portfolio: PortfolioProps) => portfolio.featured);
  const otherPortfolio = portfolioList.filter((portfolio: PortfolioProps) => !portfolio.featured);

  const usefetch = async (url) => {
    try {
      const res = await fetch(`${url}`, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setPortfolioList(await res.json());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    usefetch('/api/portfolios')
  }, [])

  return (
    <section className="flex grow flex-col items-stretch space-y-5 text-eggshell md:space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
      <Link
        href={featuredPortfolio?.localURL || '/'}
        className="relative flex min-h-[104px] w-full grow items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
      >
        <Image
          src={featuredPortfolio?.imageUrl || "https://picsum.photos/400"}
          alt="placeholder"
          fill
          className="object-cover"
        />
        <div className="z-10 text-sm">
          <p className="font-bold">{featuredPortfolio?.title}</p>
          <p>{featuredPortfolio?.category}</p>
        </div>
      </Link>
      <div className="flex w-full grow space-x-4 md:space-x-8 lg:grow">
        {otherPortfolio.map(({ title, localURL, category, imageUrl }) =>
          <Link
            key={title}
            href={localURL}
            className="relative flex min-h-[104px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
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
          </Link>
        )}
      </div>
    </section>
  );
}
