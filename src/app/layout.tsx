import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Bahar Portfolio",
  description: "Portfolio software engineer",
  icons: "/icon/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> 
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-darkBlue dark:bg-white transition-colors`}><ThemeToggle />{children}</body>
    </html>
  );
}
