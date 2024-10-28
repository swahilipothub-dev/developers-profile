"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define a type for gallery images
interface Image {
  src: string;
  description: string;
}

// Initial gallery images
const initialImages: Image[] = [
  { src: "/gallery/team-event.jpg", description: "Team event at Swahilipot Hub during ICP hackathon. This event brought together participants from various backgrounds to collaborate and innovate." },
  { src: "/gallery/tech-kids.jpeg", description: "Kids from highschool showcasing their projects" },
  { src: "/gallery/tabiya-hackathon.JPG", description: "Coding session during Hackathon where developers shared ideas and solved problems together." },
];

// UploadButton component for adding new images
interface UploadButtonProps {
  onUpload: (files: File[]) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      onUpload(fileArray); // Pass files to parent component
    }
  };

  return (
    <div>
      <label htmlFor="upload-button">
        <input
          id="upload-button"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button
          type="button"
          onClick={() => document.getElementById('upload-button')?.click()}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow"
        >
          Add New Images
        </button>
      </label>
    </div>
  );
};

// Main Gallery component
export default function Gallery() {
  const [images, setImages] = useState<Image[]>(() => {
    // Load images from local storage or use initial images
    const storedImages = localStorage.getItem("galleryImages");
    return storedImages ? JSON.parse(storedImages) : initialImages;
  });

  // Save images to local storage whenever the images state changes
  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  const handleUpload = (files: File[]) => {
    // Create URLs for each uploaded image and add them to the gallery with a custom caption
    const newImages = files.map((file): Image => {
      const src = URL.createObjectURL(file);
      const description = prompt("Enter a caption for this image:") || "No caption provided";
      return { src, description };
    });
    setImages((prevImages: Image[]) => [...prevImages, ...newImages]);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Back to Home Link */}
      <Link href="/" className="animate-pulse text-md">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-8">SPH Gallery</h1>
      
      {/* Upload Button */}
      <UploadButton onUpload={handleUpload} />

      {/* Display images */}
      {images.map(({ src, description }: Image, index: number) => (
        <div key={index} className="border p-4 rounded-lg shadow-md w-full max-w-xl flex flex-col items-center">
          <img src={src} alt={description} className="w-full h-auto rounded-lg mb-3" />
          <p className="text-sm text-gray-700 text-center mt-2">{description}</p>
        </div>
      ))}
    </div>
  );
}
