import Image from "next/image";

export type PortfolioProps = {
  title: string;
  localURL: string;
  category?: string;
  url?: string;
  description?: string;
  imageUrl?: string;
};

export default function Portfolio() {
  return (
    <>
      <section className="space-y-5 text-eggshell xs:hidden">
        <a
          href="/lifemade"
          className="relative flex min-h-[104px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
        >
          <Image
            src={"https://picsum.photos/400"}
            alt="placeholder"
            fill
            className="object-cover"
          />
          <div className="z-10 text-sm">
            <p className="font-bold">title</p>
            <p>category</p>
          </div>
        </a>
        <div className="flex space-x-5">
          <a
            href="/lifemade"
            className="relative flex min-h-[104px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
          >
            <Image
              src={"https://picsum.photos/400"}
              alt="placeholder"
              fill
              className="object-cover"
            />
            <div className="z-10 text-sm">
              <p className="font-bold">title</p>
              <p>category</p>
            </div>
          </a>
          <a
            href="/lifemade"
            className="relative flex min-h-[104px] w-full items-end overflow-hidden rounded-lg p-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:from-olive before:from-20% before:content-['']"
          >
            <Image
              src={"https://picsum.photos/400"}
              alt="placeholder"
              fill
              className="object-cover"
            />
            <div className="z-10 text-sm">
              <p className="font-bold">title</p>
              <p>category</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
