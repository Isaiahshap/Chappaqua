import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const openSans = Open_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPAC — Chappaqua Performing Arts Center",
  description: "Live performance, film, education, and community events in Chappaqua, NY.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
