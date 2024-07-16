import type { Metadata } from "next";
import { Khand, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const khand = Khand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-khand'
});

export const metadata: Metadata = {
  title: `Carlos ⍛ Medina`,
  description: "A portfolio for yours truly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${khand.variable} ${inter.className} bg-white text-darkGreen`}>{children}</body>
    </html>
  );
}
