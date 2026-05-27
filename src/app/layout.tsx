import { Barlow_Condensed, Inter } from "next/font/google";
import SiteShell from "@/Components/layout/SiteShell";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${barlow.variable} font-inter`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}