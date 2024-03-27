import Link from "next/link";

export type NavItemProps = {
  name: string;
  url: string;
};
export default function NavItem({ name, url }: NavItemProps) {
  return (
    <>
      {url === "" ? (
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      ) : (
        <Link href={url}>{name}</Link>
      )}
    </>
  );
}
