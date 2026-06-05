import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ankitmaji.com'),
  title: "Ankit Maji | Cinematographer & Creative Director",
  description: "Ankit Maji is a premium cinematographer and creative director specializing in narrative filmmaking, high-end commercials, and visual storytelling.",
  keywords: ["Cinematographer", "Creative Director", "Filmmaker", "Ankit Maji", "Video Production", "Commercials", "Visual Storytelling", "Director of Photography"],
  authors: [{ name: "Ankit Maji" }],
  creator: "Ankit Maji",
  openGraph: {
    title: "Ankit Maji | Cinematographer",
    description: "Premium cinematographer and creative director based in India.",
    url: "https://ankitmaji.com",
    siteName: "Ankit Maji Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Ankit Maji Cinematography Showreel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Maji | Cinematographer",
    description: "Premium cinematographer and creative director.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <Analytics />
      </body>
    </html>
  );
}
