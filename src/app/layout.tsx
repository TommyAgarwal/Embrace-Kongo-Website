import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@fontsource/boldonse";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Embrace Kongo",
  description: "10-day program of workshops, traditional performances, and guided experiences led by local and international master artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>{children}</body>
    </html>
  );
}



