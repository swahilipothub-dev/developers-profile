"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import "./globals.css";

const geistSans = localFont({ src: "./fonts/GeistVF.woff", variable: "--font-geist-sans", weight: "100 900" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from localStorage
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // Convert saved string to boolean
  });

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`container mx-auto ${geistSans.variable} antialiased bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300`}
      >
        <button
          onClick={() => setDarkMode(prevMode => !prevMode)} // Use the previous state to toggle
          aria-label="Toggle dark mode"
          className="absolute top-5 right-5 border p-2 rounded-md"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {children}
      </body>
    </html>
  );
}
