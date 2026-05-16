import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Optilux — Expert Vision Care and Trusted Eye Specialists",
  description: "Comprehensive eye exams with modern tools that provide accurate results while ensuring comfort and safety for every patient.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
