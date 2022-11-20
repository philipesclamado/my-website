import classNames from "classnames";
import { NavMap } from "../../constants";
import { NavLink } from "../atom";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <div id="nav">
      <ul className={classNames(className, "flex", "flex-row")}>
        {NavMap.map((nav, i) => (
          <li key={i}>
            <NavLink name={nav.name} link={nav.link} />
          </li>
        ))}
      </ul>
    </div>
  );
};
