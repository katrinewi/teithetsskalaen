"use client";
import { createContext, ReactElement, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface Props {
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export const ThemeContextProvider = (props: Props): ReactElement => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => initialThemeHandler());

  const getLocalValue = (): string | null => {
    return localStorage.getItem("theme");
  };

  const initialThemeHandler = (): void => {
    const localTheme = getLocalValue();
    if (localTheme) {
      document!.querySelector("html")!.classList.add(localTheme);
      setTheme(localTheme);
    } else {
      document!.querySelector("html")!.classList.add("light");
      setTheme("light");
    }
  };

  const toggleTheme = (): void => {
    if (theme === "dark") {
      setTheme("light");
      updateHtmlClass("dark", "light");
      saveToLocal("light");
      return;
    }
    setTheme("dark");
    updateHtmlClass("light", "dark");
    saveToLocal("dark");
    return;
  };

  const updateHtmlClass = (oldClass: string, newClass: string) => {
    document!.querySelector("html")!.classList.remove(oldClass);
    document!.querySelector("html")!.classList.add(newClass);
  };

  const saveToLocal = (newTheme: string) => {
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
