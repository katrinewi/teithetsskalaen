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
  { text: "Forside", href: "/" },
  { text: "Legg til", href: "/create" },
];

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  return (
    <nav className="flex justify-between text-lg items-center">
      <div className="flex justify-between gap-10 items-center">
        <Logo className="h-20 w-20 fill-light-text stroke-light-text dark:fill-dark-text dark:stroke-dark-text hidden sm:block" />
        <ul className="flex justify-between gap-5">
          {links.map((link) => (
            <li
              key={link.href}
              className={`text-xl text-light-text dark:text-dark-text ${pathname === link.href ? "border-b-2 border-light-primary dark:border-dark-primary" : ""}`}
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
              <DarkModeIcon className="m-5 fill-light-text dark:fill-dark-text" />
            ) : (
              <LightModeIcon className="m-5 fill-light-text dark:fill-dark-text" />
            )
          }
          aria-label={`Activate ${theme === "light" ? "dark" : "light"} mode`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
