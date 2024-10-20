import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import Navbar from './component/navbar'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar />
        {children}

        <div className="flex justify-center">
          <button className="bg-blue-700 text-white p-5 m-5 rounded-md">
            <a href="https://www.linkedin.com/in/floyd-caldeira-55a834160/">My Linkedin Profile</a>
          </button>
          <button className="bg-blue-700 text-white p-5 m-5 rounded-md ml-4"> <a href="https://github.com/floydcal">My Github Profile</a>
          </button>
        </div>
      </body>
    </html>
  );
}
