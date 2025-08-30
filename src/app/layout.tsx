import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Ritesh | Portfolio | web developer",
  description: "My personal portfolio website",
  icons: {
    icon: "/logo.png", // or '/favicon.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oxanium.className}>{children}
      </body>
    </html>
  );
}
