import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavItems from "@/components/navbar/NavItems";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Carlos Medina",
  description: "Fullstack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} my-4 flex min-h-screen flex-col bg-eggshell text-olive antialiased xl:my-8`}
      >
        <NavItems />
        <main className="mx-4 my-2 flex flex-grow flex-col justify-between space-y-4 md:space-y-8 lg:mx-8 xl:px-36">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
