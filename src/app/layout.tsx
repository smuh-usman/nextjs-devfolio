import "./globals.css";
import type { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "My Framer Motion Site",
  description: "Built with Next.js + Framer Motion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}