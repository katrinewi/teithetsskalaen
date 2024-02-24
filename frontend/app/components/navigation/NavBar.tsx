"use client";
import { useContext } from "react";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import ThemeContext from "../../providers/Theme";
import IconButton from "../UI/IconButton";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-end">
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
  );
};

export default NavBar;
