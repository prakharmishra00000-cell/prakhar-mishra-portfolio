import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

export const metadata: Metadata = {
  title: "Prakhar Mishra | AI Full-Stack Systems Developer",
  description: "AI Full-Stack Systems Developer & Author from MMMUT Gorakhpur architecting intelligent production products.",
  openGraph: {
    title: "Prakhar Mishra | AI Full-Stack Systems Developer",
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
      <body className="bg-grid">
        <Starfield />
        <Navigation />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
