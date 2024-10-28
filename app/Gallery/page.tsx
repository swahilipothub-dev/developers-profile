import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define the images for the gallery
const images = [
  {
    src: "/gallery/team-event.jpg",
    description:
      "Team event at Swahilipot Hub during ICP hackathon. This event brought together participants from various backgrounds to collaborate and innovate.",
  },
  {
    src: "/gallery/tech-kids.jpeg",
    description: "Kids from high school showcasing their projects",
  },
  {
    src: "/gallery/tabiya-hackathon.JPG",
    description:
      "Coding session during Hackathon where developers shared ideas and solved problems together.",
  },
  // Add more images with descriptions here
];

// Carousel component to showcase images with their descriptions
export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {images.map(({ src, description }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  {/* Display the image */}
                  <img src={src} alt={description} className="rounded-lg mb-4 h-auto w-full" />
                  {/* Display the description */}
                  <p className="text-lg text-center">{description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// Main Gallery component
export default function Gallery() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Back to Home Link */}
      <Link href="/" className="animate-pulse text-md">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-8">SPH Gallery</h1>

      {/* Render the Carousel */}
      <CarouselDemo />
    </div>
  );
}
