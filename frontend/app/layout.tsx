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
        <body className="flex flex-col gap-5 font-mono h-screen p-4">
          <NavBar />
          <main className="flex items-center justify-center">
            <div className="flex flex-col gap-5 max-w-2xl grow">{children}</div>
          </main>
        </body>
      </Providers>
    </html>
  );
}
