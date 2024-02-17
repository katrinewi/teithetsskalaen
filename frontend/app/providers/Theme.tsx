"use client";
import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {},
});

interface Props {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export const ThemeContextProvider = (props: Props): ReactElement => {
  const [dark, setDark] = useState(false);
  useEffect(() => initialThemeHandler());

  const getLocalValue = (): boolean => {
    return !localStorage.getItem("darkTheme");
  };

  const initialThemeHandler = (): void => {
    if (getLocalValue()) {
      localStorage.setItem("darkTheme", "false");
      document!.querySelector("html")!.classList.add("dark");
      setDark(false);
    } else {
      const localDark: boolean = JSON.parse(localStorage.getItem("darkTheme")!);
      localDark && document!.querySelector("html")!.classList.add("dark");
      setDark(() => {
        return localDark;
      });
    }
  };

  const toggleTheme = (): void => {
    const localDark: boolean = JSON.parse(localStorage.getItem("darkTheme")!);
    setDark(!localDark);
    toggleDarkBodyClass();
    saveToLocal();
  };

  function toggleDarkBodyClass(): void {
    document!.querySelector("html")!.classList.toggle("dark");
  }

  function saveToLocal(): void {
    localStorage.setItem("darkTheme", `${!dark}`);
  }

  return (
    <ThemeContext.Provider value={{ dark: dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
