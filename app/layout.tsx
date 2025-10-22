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
  title: "HR Vista 2.0",
  description: "Join us for the premier HR Vista featuring industry leaders, innovative sessions, and networking opportunities.",
  icons: {
    icon: '/logos/1.png',
    shortcut: '/logos/1.png',
    apple: '/logos/1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logos/1.png" type="image/png" />
        <link rel="shortcut icon" href="/logos/1.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logos/1.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
