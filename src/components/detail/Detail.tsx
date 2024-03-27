type DetailProps = {
  title: string;
  list: string[];
};

export default function Detail({ title, list }: DetailProps) {
  return (
    <section className="">
      <h2 className="mb-1 font-bold text-olive">{title}</h2>
      <ul className="text-xs">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
