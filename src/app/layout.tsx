import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/ui/SmoothScroller";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/ui/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한국후지 답십리 대리점 | Chaos to Order",
  description: "정밀 육절기 토탈 솔루션. 현장의 난제를 질서로 바꾸는 정밀 육절기 파트너.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-white`}
        suppressHydrationWarning
      >
        <SmoothScroller>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Chatbot />
        </SmoothScroller>
      </body>
    </html>
  );
}
