import type { Metadata } from "next";
import localFont from "next/font/local";
import "../assets/globals.css";
import NavigationBar from "./_components/navigation-bar";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "홍슐랭",
  description: "홍준혁의 발견",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <NavigationBar />

        <div className="pb-[80px]" />

        {children}
      </body>
    </html>
  );
}
