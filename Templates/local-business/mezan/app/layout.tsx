/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Plumber & Handyman Services`,
  description: "World class comprehensive handyman services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
