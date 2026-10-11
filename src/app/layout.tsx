import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prakhar Mishra | 3D Explorable Cyber World & AI Full-Stack Developer",
  description: "Futuristic 3D explorable cyber world and portfolio of Prakhar Mishra. Featuring AI Platforms (CareerHub AI, ExamIntel), WebGL shaders, Three.js 3D Holo-Theater, and Next.js engineering.",
  keywords: [
    "Prakhar Mishra",
    "3D Portfolio",
    "Three.js",
    "WebGL",
    "CareerHub AI",
    "ExamIntel",
    "AI Full-Stack Developer",
    "Creative Technologist",
    "Next.js",
    "Cyberpunk Portfolio",
    "Holographic Web"
  ],
  openGraph: {
    title: "Prakhar Mishra | 3D Explorable Cyber World & AI Full-Stack Developer",
    description: "Explore the futuristic 3D cyberpunk world with real-time holographic video theater, drone flight, and AI platforms.",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
