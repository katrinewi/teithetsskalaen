"use client";
import { createContext, ReactElement, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const ThemeContext = createContext({
  theme: "",
  setTheme: (newTheme: string) => {},
});

interface Props {
  initialTheme?: string;
  children?: JSX.Element | Array<JSX.Element> | React.ReactNode;
}

export const ThemeContextProvider = (props: Props): ReactElement => {
  const [cookies, setCookie, removeCookie] = useCookies<
    "theme",
    { theme: string | undefined }
  >(["theme"]);
  const initialState = cookies.theme || props.initialTheme || "light";
  const [providedTheme, setProvidedTheme] = useState<string>(initialState);

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
    setCookie("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: providedTheme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
