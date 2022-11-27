import classNames from "classnames";
import { NavLink } from "../atom";

interface NavBarProps {
  navStyle?: string;
  borderStyle?: string;
  hoverStyle?: string;
}

export const NavBar = ({ navStyle, borderStyle, hoverStyle }: NavBarProps) => {
  return (
    <div id="nav">
      <ul className={classNames(navStyle, "flex", "flex-row")}>
        <li>
          <NavLink name="Home" link="/" className={classNames(hoverStyle)} />
        </li>
        <div className={classNames("border", borderStyle)} />
        <li>
          <NavLink
            name="Papers"
            link="/papers"
            className={classNames(hoverStyle)}
          />
        </li>
        <div className={classNames("border", borderStyle)} />
        <li>
          <NavLink
            name="Projects"
            link="/#projects"
            className={classNames(hoverStyle)}
          />
        </li>
      </ul>
    </div>
  );
};
