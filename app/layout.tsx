"use client";

import localFont from "next/font/local";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Only set initial darkMode from localStorage after component mounts
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`container mx-auto ${geistSans.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        {/* Header with Roadmap and Dark Mode Toggle */}
        <header className="flex justify-between items-center p-5">
          <h1 className="text-xl font-bold">Swahilipot</h1>
          <div className="flex items-center space-x-4">
            {/* Roadmap Button */}
            <Link href="/roadmap">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Roadmap
              </button>
            </Link>
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode((prevMode) => !prevMode)}
              aria-label="Toggle dark mode"
              className="border p-2 rounded-md"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>
        
        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
