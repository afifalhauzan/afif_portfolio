
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Afif's Portfolio",
  description: "Welcome!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body
        className={`font-jakarta antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
