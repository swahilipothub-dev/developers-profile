import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import Navbar from "./components/navbarComponent";

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
  title: "Swahilipot Tech x Hacktoberfest",
  description: "This website has been created by the SPH Engineering team to enable and show developers how to contribute to open-source projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*<Navbar/>*/}
        {children}
      </body>
    </html>
  );
}
