import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My AI Portfolio",
  description: "Built with Next.js and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {/* pt-16 ensures content doesn't get hidden behind the sticky navbar */}
        <main className="min-h-screen pt-16 bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}