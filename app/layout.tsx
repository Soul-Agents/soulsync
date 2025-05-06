import { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PrivyAuthProvider } from "@/components/providers/privy-provider";
import { QueryProvider } from "./providers/QueryProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  minimumScale: 1,
  userScalable: true,
  themeColor: "#000033",
};

export const metadata: Metadata = {
  title: "Soul Agents - Next Generation AI Agents",
  description: "Empowering communities with intelligent AI agents",
  keywords:
    "AI, marketing, business development, X marketing, Telegram marketing",
  authors: [{ name: "Soul Team" }],
  openGraph: {
    title: "Soul Agents - AI-Powered Business Development",
    description:
      "Revolutionizing business and project growth with AI-powered marketing",
    type: "website",
    locale: "en_US",
    url: "https://soulagents.io",
    images: [
      {
        url: "/soul-agents.jpg",
        width: 1200,
        height: 630,
        alt: "Soul Agents Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@soul_agents",
    creator: "@soul_agents",
    images: ["/soul-agents.jpg"],
    title: "Soul Agents - AI Agents for building of your community on X",
    description: "Revolutionizing business growth with AI-powered marketing",
  },
  metadataBase: new URL("https://soulagents.io"),
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/placeholder-avatar2.png",
    apple: "/placeholder-avatar2.png",
    shortcut: "/placeholder-avatar2.png",
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
        <QueryProvider>
          <PrivyAuthProvider>
            <MainLayout>{children}</MainLayout>
          </PrivyAuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
