import type { Metadata } from "next";
import { Jost, Work_Sans } from 'next/font/google';
import "./styles/globals.css";

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-jost',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--ff-work-sans',
});

export const metadata: Metadata = {
  title: 'NinjaReader - Get Your New Book Collections',
  description: 'This is a Book eCommerce platform template made by lucy-sees',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
