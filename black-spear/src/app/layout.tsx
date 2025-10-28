import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Black Spear Agency | Luxury Sports Concierge",
  description:
    "The Black Spear Agency crafts legacy sports and travel experiences that unite African cultural capital with world-class luxury.",
  icons: {
    icon: "/black-spear-mark.svg",
  },
  openGraph: {
    title: "The Black Spear Agency",
    description:
      "Architects of African-led luxury sports travel. Private aviation, mega-event mastery, and cultural immersion executed with precision.",
    url: "https://agentic-4d70d3e4.vercel.app",
    siteName: "The Black Spear Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Black Spear Agency",
    description:
      "Architects of legacy sports experiences for the global African diaspora.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grain-overlay" aria-hidden />
        {children}
      </body>
    </html>
  );
}
