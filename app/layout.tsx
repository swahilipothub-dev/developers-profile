// app/layout.tsx

"use client"; // Keep this to use React hooks

import localFont from "next/font/local";
import { useState } from "react";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`container mx-auto ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 border p-2 rounded-md"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {children}
      </body>
    </html>
  );
}
