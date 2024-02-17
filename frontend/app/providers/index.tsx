"use client";

import { FunctionComponent, ReactNode } from "react";
import { ThemeContextProvider } from "./Theme";

interface Props {
  children: ReactNode;
  className?: string;
}

const Providers: FunctionComponent<Props> = ({ children }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default Providers;
