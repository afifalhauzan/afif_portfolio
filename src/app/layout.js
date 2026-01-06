import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// Optimize font loading with display: swap and preload
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  preload: true,
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Afif's Portfolio",
  description: "Welcome! A front-end developer and UI/UX Designer who bridges the gap between design and code.",
  keywords: "front-end developer, UI/UX designer, React, Next.js, portfolio",
  authors: [{ name: "Afiif Al Hauzaan Alfian" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${jakartaSans.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
