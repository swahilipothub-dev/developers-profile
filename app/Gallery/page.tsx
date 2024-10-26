import React from "react";
import Link from "next/link";

const images = [
  { src: "/gallery/team-event.jpg", description: "Team event at Swahilipot Hub during ICP hackathon. This event brought together participants from various backgrounds to collaborate and innovate." },
  { src: "/gallery/tech-kids.jpeg", description: "Kids from highschool showcasing their projects" },
  { src: "/gallery/tabiya-hackathon.JPG", description: "Coding session during Hackathon where developers shared ideas and solved problems together." },
  // Add more images with descriptions here
];

export default function Gallery() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Back to Home Link */}
      <Link href="/" className="animate-pulse text-md">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8">SPH Gallery</h1>
      {images.map(({ src, description }, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md w-full max-w-xl flex"> {/* Medium sized box */}
          <img src={src} alt={description} className="w-2/3 h-auto rounded-lg mb-3" /> {/* Image width */}
          <div className="flex flex-col justify-between ml-4 w-1/3"> {/* Description container */}
            <p className="text-sm text-gray-700">{description}</p>
            {/* Caption removed */}
          </div>
        </div>
      ))}
    </div>
  );
}
