import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Sankalpa Giri",
  description:
    "AI/ML Developer, Automation Engineer and Computer Science Student",
  keywords: [
    "AI",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Portfolio",
    "Sankalpa Giri",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="bg-black text-white">
        <Navbar />
          {children}
      </body>
    </html>
  );
}