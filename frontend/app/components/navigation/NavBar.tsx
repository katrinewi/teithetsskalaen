"use client";
import { useContext } from "react";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import ThemeContext from "../../providers/Theme";
import IconButton from "../UI/IconButton";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-end">
      <div className="flex justify-between gap-5 items-center">
        <IconButton
          icon={
            theme === "light" ? (
              <DarkModeIcon className="fill-light-text dark:fill-dark-text" />
            ) : (
              <LightModeIcon className="fill-light-text dark:fill-dark-text" />
            )
          }
          aria-label={`Active ${theme === "light" ? "dark" : "light"} mode`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
