import type { Metadata } from "next";
import { Khand, Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const khand = Khand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: `Carlos ⍛ Medina`,
  description: "Portfolio made by yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-4 scroll-smooth">
      <head>
        <PlausibleProvider domain="cmed.dev" />
      </head>

      <body
        className={`${khand.variable} ${inter.className} relative flex flex-col items-center justify-center bg-white pb-24 text-darkGreen antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
