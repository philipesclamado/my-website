import classNames from "classnames";
import Link from "next/link";

interface NavLinkProps {
  link: string;
  name: string;
  className?: string;
}

export const NavLink = ({ link, name, className }: NavLinkProps) => {
  return (
    <Link href={link} className={classNames(className, "hover:cursor-pointer")}>
      {name}
    </Link>
  );
};
