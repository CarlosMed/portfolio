import Link from "next/link";
import NavItem from "./NavItem";

export default function Navbar() {
  const links = [
    { name: "Github", url: "https://github.com/CarlosMed" },
    { name: "Codepen", url: "https://codepen.io/carlosmed" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/carlosmed/" },
    { name: "About Me", url: "/about" },
    {
      name: "Contact Me",
      url: "mailto:carlos.w.med@gmail.com?subject=Hi, Lets Work Together!",
    },
  ];

  return (
    <nav className="text-center text-olive">
      <Link href="/" className="mb-1 text-center text-6xl font-extrabold">
        Carlos M.
      </Link>
      <div className="w-full space-x-1 text-xs font-bold">
        {links.map(({ name, url }, index) => (
          <NavItem key={index} name={name} url={url} />
        ))}
      </div>
    </nav>
  );
}
