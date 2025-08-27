import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WhoisDhana - AI Developer × Designer × Marketing Veteran",
  description: "A decade of design + marketing experience meets cutting-edge AI development. Building intelligent tools that simplify complex processes.",
  keywords: ["AI Developer", "Designer", "Marketing", "Next.js", "TypeScript", "Portfolio", "WhoisDhana"],
  authors: [{ name: "WhoisDhana" }],
  themeColor: "#000000",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "WhoisDhana - AI Developer × Designer × Marketing Veteran",
    description: "A decade of design + marketing experience meets cutting-edge AI development",
    url: "https://whoisdhana.xyz",
    siteName: "WhoisDhana Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhoisDhana - AI Developer × Designer × Marketing Veteran",
    description: "A decade of design + marketing experience meets cutting-edge AI development",
    creator: "@whois_dhana",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" style={{ backgroundColor: '#22313F' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceMono.variable} antialiased`}
        style={{ backgroundColor: '#22313F' }}
      >
        {children}
      </body>
    </html>
  );
}
