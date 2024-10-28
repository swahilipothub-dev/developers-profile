"use client";

import React, { useState, useEffect } from "react";

interface User {
  name: string;
  githubUsername: string;
}

interface ApiUser {
  name: string;
  githubusername: string; // Ensure this matches your API response
}

const UserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("/api/contributors");
        const data: ApiUser[] = await response.json(); // Use the ApiUser interface
        console.log(data); // Log the data to check its structure
        const formattedData = data.map((user) => ({
          name: user.name,
          githubUsername: user.githubusername, // Ensure this matches your API response
        }));
        setUsers(formattedData);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row mt-10">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user, index) => (
          <div
            key={index}
            className="max-w-sm mx-3 mb-4 p-6 bg-white border border-gray-300 hover:border-t-transparent hover:border-l-transparent transition duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50 hover:translate-x-[-5px] hover:translate-y-[-5px]"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Name: {user.name}
            </h2>
            <p className="text-gray-700 mt-2">
              GitHub:{" "}
              <a
                href={`https://github.com/${user.githubUsername}`}
                className="text-blue-600 hover:underline"
              >
                @{user.githubUsername}
              </a>
            </p>
          </div>
        ))
      ) : (
        <p>No contributors found.</p>
      )}
    </div>
  );
};

export default UserCard;
