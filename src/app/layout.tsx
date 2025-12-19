import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision Craft | Strategic Consultancy",
  description: "Where complexity becomes clarity. Where insight becomes advantage. Global strategic advisory for industry leaders.",
  metadataBase: new URL('https://visioncraft.consulting'), // Placeholder, will be used for OG URLs
  openGraph: {
    title: "Vision Craft | Strategic Consultancy",
    description: "Where complexity becomes clarity. Where insight becomes advantage. Global strategic advisory for industry leaders.",
    url: 'https://visioncraft.consulting',
    siteName: 'Vision Craft',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Vision Craft',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vision Craft | Strategic Consultancy",
    description: "Where complexity becomes clarity. Where insight becomes advantage. Global strategic advisory for industry leaders.",
    images: ['/opengraph-image'],
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
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}