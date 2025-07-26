import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TriSuit Store - 高品質トライスーツ専門店",
  description: "プロから初心者まで対応の高品質トライスーツを豊富に取り揃えております。最高のパフォーマンスを実現するトライスーツをお探しください。",
  openGraph: {
    title: "TriSuit Store - 高品質トライスーツ専門店",
    description: "プロから初心者まで対応の高品質トライスーツを豊富に取り揃えております。最高のパフォーマンスを実現するトライスーツをお探しください。",
    type: "website",
    locale: "ja_JP",
    siteName: "TriSuit Store",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TriSuit Store - 高品質トライスーツ専門店",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TriSuit Store - 高品質トライスーツ専門店",
    description: "プロから初心者まで対応の高品質トライスーツを豊富に取り揃えております。最高のパフォーマンスを実現するトライスーツをお探しください。",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
