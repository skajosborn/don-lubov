import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Dancing_Script, Pacifico, Satisfy, Caveat, Indie_Flower, Architects_Daughter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  weight: "400",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const indieFlower = Indie_Flower({
  variable: "--font-indie",
  weight: "400",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  variable: "--font-architects",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Don Lubov - Author",
  description: "Discover the captivating works of Don Lubov. Explore his latest books and dive into worlds of imagination and adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${garamond.variable} ${dancingScript.variable} ${pacifico.variable} ${satisfy.variable} ${caveat.variable} ${indieFlower.variable} ${architectsDaughter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
