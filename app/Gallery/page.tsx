"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ImageData {
  src: string;
  description: string;
}

const initialImages: ImageData[] = [
  { src: "/gallery/team-event.jpg", description: "Team event at Swahilipot Hub during ICP hackathon. This event brought together participants from various backgrounds to collaborate and innovate." },
  { src: "/gallery/tech-kids.jpeg", description: "Kids from high school showcasing their projects." },
  { src: "/gallery/tabiya-hackathon.JPG", description: "Coding session during Hackathon where developers shared ideas and solved problems together." },
  // Add more images with descriptions here
];

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>(initialImages);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");

  // Handler to add new image to gallery
  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewImage(file);
    }
  };

  // Handler to submit the new image and description
  const handleSubmit = () => {
    if (newImage) {
      const newImageURL = URL.createObjectURL(newImage);
      const newImageData: ImageData = {
        src: newImageURL,
        description: description || "User-uploaded photo", // Use user-provided description or default
      };
      setImages([...images, newImageData]);
      // Reset the input fields
      setNewImage(null);
      setDescription("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Back to Home Link */}
      <Link href="/" className="animate-pulse text-md text-blue-600 hover:underline">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8">SPH Gallery</h1>

      {/* Upload Section */}
      <div className="flex flex-col items-center mb-8">
        <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Upload New Photo
          <input
            type="file"
            accept="image/*"
            onChange={handleAddPhoto}
            className="hidden"
          />
        </label>
        
        <input
          type="text"
          placeholder="Add a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded px-2 py-1 mt-2 w-72"
        />

        <button 
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600"
        >
          Add Image
        </button>
      </div>

      {/* Gallery Display */}
      <div className="flex flex-wrap justify-center gap-8">
        {images.map(({ src, description }, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md w-full max-w-xl flex flex-col items-center">
            <Image
              src={src}
              alt={description}
              width={500}
              height={300}
              className="rounded-lg mb-3 object-cover"
            />
            <p className="text-sm text-gray-700 text-center">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
