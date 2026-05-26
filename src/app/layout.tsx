import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteShell from "@/Components/layout/SiteShell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Home - Frontend Engineer",
//   description: "Adeyemi Ezekiel Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
