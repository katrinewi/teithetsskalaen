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
        {/* Setting the className is is a hack to prevent a flash of unstyled content. Class is removed once the ThemeProvider has initialized */}
        <body className="invisible">
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
