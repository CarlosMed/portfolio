import Link from "next/link";
import NavItem from "./NavItem";

export default function Navbar() {
  const socialLinks = [
    { name: "Github", url: "https://github.com/CarlosMed" },
    { name: "Codepen", url: "https://codepen.io/carlosmed" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/carlosmed/" },
  ];

  const localLinks = [
    { name: "Home", url: "/" },
    { name: "About Me", url: "/about" },
    { name: "Portfolio", url: "/portfolio" },
    {
      name: "Contact Me",
      url: "mailto:carlos.w.med@gmail.com?subject=Hi, Lets Work Together!",
    },
  ]

  return (
    <nav className="mb-4 text-center text-olive">
      <Link href="/" className="text-center text-[clamp(4.5rem,calc(0.8rem+13vw),14rem)] font-black leading-none">
        Carlos <span className="text-tan">M.</span>
      </Link>
      <div className="font-regular mb-2 w-full space-x-3.5 text-xs md:space-x-20 md:text-sm">
        {localLinks.map(({ name, url }, index) => (
          <NavItem key={index} name={name} url={url} />
        ))}
      </div>
      <div className="font-regular w-full space-x-3.5 text-xs md:space-x-20 md:text-sm">
        {socialLinks.map(({ name, url }, index) => (
          <NavItem key={index} name={name} url={url} />
        ))}
      </div>
    </nav>
  );
}
