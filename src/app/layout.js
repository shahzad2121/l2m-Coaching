import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "L2M Coaching & Mentoring | Unlock Confidence, Clarity & Connection",
  description:
    "Expert coaching and mentoring by Lloyd Munyaviri. Helping leaders, parents, and teens unlock their full potential through proven coaching frameworks.",
  keywords: "coaching, mentoring, leadership coaching, life coaching, executive coaching, Lloyd Munyaviri, L2M Coaching",
  openGraph: {
    title: "L2M Coaching & Mentoring",
    description: "Coaching Leaders, Parents & Teens to Unlock Confidence, Clarity & Connection.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
