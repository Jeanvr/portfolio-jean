import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jean Carlo Vega | Frontend Developer",
    template: "%s | Jean Carlo Vega",
  },
  description:
    "Portfolio de Jean Carlo Vega, Frontend Developer especializado en React, Next.js, TypeScript, accesibilidad y rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
