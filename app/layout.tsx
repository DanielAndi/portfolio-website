import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { ProgressBar } from "@/components/progress-bar";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        <ProgressBar />
        <div className="lg:grid lg:grid-cols-[320px_1fr] min-h-screen">
          <Sidebar />
          <main id="main" className="px-4 sm:px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}