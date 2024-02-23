"use client";

import { FunctionComponent, ReactNode } from "react";
import { ThemeContextProvider } from "./Theme";
import { initialize } from "next/client";

interface Props {
  children: ReactNode;
  className?: string;
  initialTheme?: string;
}

const Providers: FunctionComponent<Props> = ({ children, initialTheme }) => {
  return (
    <ThemeContextProvider initialTheme={initialTheme}>
      {children}
    </ThemeContextProvider>
  );
};

export default Providers;
