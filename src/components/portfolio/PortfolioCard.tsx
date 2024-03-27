import Image from "next/image";
import { PortfolioProps } from "./Portfolio";

export default function PortfolioCard({
  title,
  localURL,
  category,
  imageUrl,
}: PortfolioProps) {
  return (
    <a
      href={localURL}
      key={title}
      className="relative flex min-h-[180px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
    >
      <Image
        src={imageUrl ?? ""}
        alt="placeholder"
        fill
        className="object-cover"
      />
      <div className="z-10 text-sm">
        <p className="font-bold">{title}</p>
        <p>{category}</p>
      </div>
    </a>
  );
}
