import type { Metadata } from "next";

import NavBar from "./components/navigation/NavBar";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Teithetsskalaen",
  description: "Ganske teit!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <Providers>
        <body>
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
