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
  metadataBase: new URL("https://garam-attendance.vercel.app"),
  title: "가람 출석체크",
  description: "출석을 손으로 세느라 매주 30분이 걸리는 강사를 돕습니다",
  openGraph: {
    title: "가람 출석체크",
    description: "출석을 손으로 세느라 매주 30분이 걸리는 강사를 돕습니다",
    url: "https://garam-attendance.vercel.app",
    siteName: "가람 출석체크",
    images: ["/my-photo.jpg"],
    type: "website",
  },
  verification: {
    google: "fxetYoT7Yt1HSrLoCZRp7sTJAEUQKdZhAqhVAw-KG7s",
    other: {
      "naver-site-verification": "cc6a711400dc80355a74276cf39cbeef119217f7",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
