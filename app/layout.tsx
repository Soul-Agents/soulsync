/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Including all weights we might need
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Soul Agents - Next Generation AI Agents",
  description: "Empowering communities with intelligent AI agents",
  keywords:
    "AI, marketing, business development, X marketing, Telegram marketing",
  authors: [{ name: "Soul Team" }],
  openGraph: {
    title: "Soul Agents - AI-Powered Business Development",
    description: "Revolutionizing business growth with AI-powered marketing",
    type: "website",
    locale: "en_US",
    url: "https://soulagents.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Agents - AI Agents for building of your community on X",
    description: "Revolutionizing business growth with AI-powered marketing",
    creator: "@soul_agents",
  },
  icons: {
    icon: "/placeholder-avatar2.png", // This adds the tab icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body
        className={`${inter.className} bg-dark-navy min-h-screen antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
