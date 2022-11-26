import classNames from "classnames";
import { NavLink } from "../atom";

interface NavBarProps {
  navStyle?: string;
  borderStyle?: string;
}

export const NavBar = ({ navStyle, borderStyle }: NavBarProps) => {
  return (
    <div id="nav">
      <ul className={classNames(navStyle, "flex", "flex-row")}>
        <li>
          <NavLink name="Home" link="/" />
        </li>
        <div className={classNames("border", borderStyle)} />
        <li>
          <NavLink name="Papers" link="/papers" />
        </li>
        <div className={classNames("border", borderStyle)} />
        <li>
          <NavLink name="Projects" link="/#projects" />
        </li>
      </ul>
    </div>
  );
};
