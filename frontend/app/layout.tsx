import type { Metadata } from "next";

import NavBar from "./components/navigation/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teithetsskalaen",
  description: "Ganske teit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = "dark";
  return (
    <html className={mode} lang="no">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
