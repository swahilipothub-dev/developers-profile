// app/roadmap/page.tsx
import Link from "next/link";
import React from "react";

// Define the types for the milestone
interface Milestone {
  title: string;
  date: string;
  description: string;
  isCompleted: boolean;
}

// Sample milestone data
const milestones: Milestone[] = [
  {
    title: "Hacktoberfest Launch",
    date: "October 1, 2024",
    description: "Kick-off of Hacktoberfest! Start contributing to open-source projects.",
    isCompleted: true,
  },
  {
    title: "Halfway Mark",
    date: "October 15, 2024",
    description: "Hacktoberfest is halfway through. Keep up the contributions!",
    isCompleted: false,
  },
  {
    title: "Final Day for PR Submission",
    date: "October 31, 2024",
    description: "Last day to submit your pull requests for Hacktoberfest.",
    isCompleted: false,
  },
  {
    title: "Final Review",
    date: "November 5, 2024",
    description: "All contributions are reviewed for eligibility and rewards.",
    isCompleted: false,
  },
];

// Roadmap component function
const ContributionRoadmap: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-background dark:bg-darkBackground text-foreground dark:text-darkForeground p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contribution Roadmap</h2>
      
      {/* Back to Home Button */}
      <Link href="/">
        <button className="mb-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
          Back to Home
        </button>
      </Link>

      <div className="relative w-full">
        {/* Vertical timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700"></div>
        
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-start mb-8 ml-12">
            {/* Timeline dot */}
            <div
              className={`w-6 h-6 rounded-full flex-shrink-0 mt-1.5 ${
                milestone.isCompleted ? "bg-green-500" : "bg-yellow-500"
              }`}
            ></div>

            {/* Milestone content */}
            <div className="ml-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
              <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.date}</p>
              <p className="text-base mt-2">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Hacktoberfest website */}
      <div className="mt-8">
        <p className="text-base">To learn more and participate, visit the official Hacktoberfest website:</p>
        <Link href="https://hacktoberfest.com" target="_blank" rel="noopener noreferrer">
          <span className="text-blue-500 hover:underline">hacktoberfest.com</span>
        </Link>
      </div>
    </div>
  );
};

export default ContributionRoadmap;
