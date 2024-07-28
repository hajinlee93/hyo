import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "한빛청년부 | 이효재 목장",
  description: "이효재 목장입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-primary font-pretendard flex flex-col max-w-screen-2xl mx-auto overflow-x-hidden scrollbar-hide w-full selection:bg-blueLight_color">
        <Header />
        <main className="relative grow w-11/12 mx-auto md:w4/5">
          {children}
          <div id="_modal"></div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
