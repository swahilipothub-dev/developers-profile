"use client";

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-lg font-semibold">Home</a>
        </Link>
        
        <Link href="/contributors" legacyBehavior>
          <a className="text-white text-lg">Contributors</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
