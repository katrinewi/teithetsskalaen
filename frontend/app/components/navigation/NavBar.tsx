"use client";
import { useContext } from "react";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import Logo from "../../assets/logos/main";
import ThemeContext from "../../providers/Theme";
import IconButton from "../UI/IconButton";

const NavBar = () => {
  const themeContext: { dark?: boolean; toggleTheme: () => void } =
    useContext(ThemeContext);

  console.log(themeContext.dark);
  return (
    <nav className="flex justify-between p-2 text-lg mb-5 items-center">
      <div className="flex justify-between gap-10 items-center">
        <Logo className="h-30 w-60 fill-light-text stroke-light-text dark:fill-dark-text dark:stroke-dark-text" />
        <ul className="flex justify-between gap-5">
          <li className="text-light-text dark:text-dark-text">Home</li>
          <li className="text-light-text dark:text-dark-text">About</li>
        </ul>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <IconButton
          icon={
            themeContext.dark ? (
              <LightModeIcon className="fill-light-text dark:fill-dark-text" />
            ) : (
              <DarkModeIcon className="fill-light-text dark:fill-dark-text" />
            )
          }
          label="Contact"
          onClick={themeContext.toggleTheme}
        />
      </div>
    </nav>
  );
};

export default NavBar;
