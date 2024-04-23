type DetailProps = {
  title: string;
  list: string[];
};

export default function Detail({ title, list }: DetailProps) {
  return (
    <section className="">
      <h2 className="mb-1 font-bold text-olive md:text-tan md:mb-8">{title}</h2>
      <ul className="text-xs space-y-1 md:space-y-2">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
