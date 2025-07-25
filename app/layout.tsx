import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.css";
import { Room } from './Room';

const  WorkSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight:['400', '600', '700']
});


export const metadata: Metadata = {
  title: "Polaro",
  description: "Freeze Ideas. Fire Up Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${WorkSans.variable} ${WorkSans.variable} antialiased bg-gray-200`}
      >
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
