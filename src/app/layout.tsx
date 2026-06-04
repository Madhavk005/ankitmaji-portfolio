import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/utils/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Ankit Maji | Cinematographer & Graphic Designer",
  description: "Crafting stories through frames, motion, and design. The premium visual portfolio of Ankit Maji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
