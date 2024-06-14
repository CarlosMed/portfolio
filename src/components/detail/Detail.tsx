type DetailProps = {
  title: string;
  list: string[];
};

export default function Detail({ title, list }: DetailProps) {
  return (
    <div>
      <h2 className="font-bold text-tan mb-2">{title}</h2>
      <ul className="text-xs space-y-1 md:space-y-2">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
