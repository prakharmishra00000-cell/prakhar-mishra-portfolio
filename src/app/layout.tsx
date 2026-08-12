import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prakhar Mishra | AI Full-Stack Web Developer",
  description: "AI Full-Stack Web Developer building intelligent digital products where AI meets modern web development.",
  openGraph: {
    title: "Prakhar Mishra | AI Full-Stack Web Developer",
    description: "Building intelligent digital products where AI meets modern web development.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grid`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
