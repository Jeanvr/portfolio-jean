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
  const themeScript = `
    (function () {
      try {
        var storedTheme = localStorage.getItem("portfolio-theme");
        var prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        var theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : prefersLight ? "light" : "dark";
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.style.colorScheme = theme;
      } catch (error) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      }
    })();
  `;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={manrope.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
