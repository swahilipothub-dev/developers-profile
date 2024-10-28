'use client';
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiUser, FiTool, FiImage, FiMenu, FiX } from "react-icons/fi"; // Import icons

export default function Home() {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen bg-white-50">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarExpanded ? "w-64" : "w-30"
        } bg-gray-500 text-white p-5 flex flex-col transition-width duration-300 min-h-screen`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold">
            {isSidebarExpanded ? "Navigation" : "Nav"}
          </span>
          <button
            onClick={() => setSidebarExpanded(!isSidebarExpanded)}
            className="sm:hidden p-2 rounded bg-gray-700 hover:bg-gray-600"
          >
            {isSidebarExpanded ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FiHome className="text-2xl" />
            {isSidebarExpanded && <span className="ml-4">Home</span>}
          </Link>
          <Link href="/how-to-contribute" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FiTool className="text-2xl" />
            {isSidebarExpanded && <span className="ml-4">How to Contribute</span>}
          </Link>
          <Link href="/contributors" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FiUser className="text-2xl" />
            {isSidebarExpanded && <span className="ml-4">Contributors</span>}
          </Link>
          <Link href="/projects" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FiTool className="text-2xl" />
            {isSidebarExpanded && <span className="ml-4">Projects</span>}
          </Link>
          <Link href="/Gallery" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <FiImage className="text-2xl" />
            {isSidebarExpanded && <span className="ml-4">Gallery</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        <section className="container mx-auto flex flex-col items-center justify-left p-5">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <h1 className="text-3xl font-semibold text-gray-800 py-5">
              SPH Engineering x Hacktoberfest
            </h1>
            <p className="text-gray-600 pb-5">
              Welcome to the SPH Engineering x Hacktoberfest website. To be featured as a contributor, you have to clear an issue,
              create a PR, and have it approved for your name to make it to the Contributors wall.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
