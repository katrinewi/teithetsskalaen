"use client";
import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "",
  setTheme: (newTheme: string) => {},
});

interface Props {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export const ThemeContextProvider = (props: Props): ReactElement => {
  const [providedTheme, setProvidedTheme] = useState<string>("");
  useEffect(() => initialThemeHandler());

  const getLocalValue = (): string | null => {
    return localStorage.getItem("theme");
  };

  const initialThemeHandler = (): void => {
    const localTheme = getLocalValue();
    if (localTheme) {
      document!.querySelector("html")!.classList.add(localTheme);
      setProvidedTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document!.querySelector("html")!.classList.add("dark");
      setProvidedTheme("dark");
    } else {
      document!.querySelector("html")!.classList.add("light");
      setProvidedTheme("light");
    }
  };

  const setTheme = (newTheme: string): void => {
    updateHtmlClass(providedTheme, newTheme);
    setProvidedTheme(newTheme);
    saveToLocal(newTheme);
    return;
  };

  const updateHtmlClass = (oldClass: string, newClass: string): void => {
    document!.querySelector("html")!.classList.remove(oldClass);
    document!.querySelector("html")!.classList.add(newClass);
  };

  const saveToLocal = (newTheme: string): void => {
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: providedTheme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
