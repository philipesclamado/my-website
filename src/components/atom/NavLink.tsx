import Link from "next/link";

interface NavLinkProps {
  link: string;
  name: string;
}

export const NavLink = ({ link, name }: NavLinkProps) => {
  return (
    <Link href={link} className="hover:cursor-pointer">
      {name}
    </Link>
  );
};
