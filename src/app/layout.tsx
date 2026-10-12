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
  title: "Embrace Kongo '27 | Cultural Retreat & Workshop in Brazzaville",
  description: "Join the waitlist for Embrace Kongo '27 in Brazzaville, Congo (July 23 – August 1). Experience the rhythm, heritage, and spirit of ancestral Africa.",
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



