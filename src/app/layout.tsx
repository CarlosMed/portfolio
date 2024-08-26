import type { Metadata } from "next";
import { Khand, Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

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
    <html lang="en">
      <head>
        <PlausibleProvider domain="cmed.dev" />
      </head>
      <body
        className={`${khand.variable} ${inter.className} bg-white text-darkGreen`}
      >
        {children}
      </body>
    </html>
  );
}
