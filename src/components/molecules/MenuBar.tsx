import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { HiMenu, HiX } from "react-icons/hi";
import classNames from "classnames";

interface MenuBarProps {
  className?: string;
}

export const MenuBar = ({ className }: MenuBarProps) => {
  return (
    <div className={classNames(className)} id="menu">
      <Menu
        menuButton={({ open }) => (
          <MenuButton>
            {open ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </MenuButton>
        )}
        transition
      >
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/papers">Papers</MenuItem>
        <MenuItem href="/#projects">Projects</MenuItem>
      </Menu>
    </div>
  );
};
