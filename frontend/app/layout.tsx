import type { Metadata } from "next";

import NavBar from "./components/navigation/NavBar";
import "./globals.css";
import Providers from "./providers";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Teithetsskalaen",
  description: "Ganske teit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverCookies = cookies();
  const theme = serverCookies.get("theme")?.value;

  return (
    <html lang="no" className={theme}>
      <Providers initialTheme={theme}>
        <body className="p-4 h-screen font-mono">
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
