import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "My website is under construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={"font-sans relative"}>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
