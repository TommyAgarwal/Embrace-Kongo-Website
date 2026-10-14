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
  metadataBase: new URL("https://embrace-kongo.web.app"),
  title: "Embrace Kongo",
  description:
    "10-day program of workshops, traditional performances, and guided experiences led by local and international master artists.",
  openGraph: {
    title: "Embrace Kongo",
    description:
      "10-day program of workshops, traditional performances, and guided experiences led by local and international master artists.",
    url: "https://embrace-kongo.web.app",
    siteName: "Embrace Kongo",
    images: [
      {
        url: "/linkpreview.png",
        width: 1200,
        height: 630,
        alt: "Embrace Kongo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embrace Kongo",
    description:
      "10-day program of workshops, traditional performances, and guided experiences led by local and international master artists.",
    images: ["/linkpreview.png"],
  },
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



