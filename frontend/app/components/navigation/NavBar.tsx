"use client";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import LightModeIcon from "../../assets/icons/LightModeIcon";
import ThemeContext from "../../providers/Theme";
import IconButton from "../UI/IconButton";
import Link from "next/link";
import Logo from "../../assets/logos/main";

const links: { text: string; href: string }[] = [
  { text: "Dashboard", href: "/" },
  { text: "Legg til", href: "/create" },
];

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  return (
    <nav className="flex justify-between p-2 text-lg mb-5 items-center">
      <div className="flex justify-between gap-10 items-center">
        <Logo className=" fill-light-text stroke-light-text dark:fill-dark-text dark:stroke-dark-text hidden sm:block" />
        <ul className="flex justify-between gap-5">
          {links.map((link) => (
            <li
              key={link.href}
              className={`text-light-text dark:text-dark-text ${pathname === link.href ? "border-b-2 border-light-primary dark:border-dark-primary" : ""}`}
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
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
