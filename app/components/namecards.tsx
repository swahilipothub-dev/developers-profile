"use client";

import React, { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface User {
  name: string;
  githubUsername: string;
}

interface ApiUser {
  name: string;
  githubusername: string; // Ensure this matches your API response
}

const ITEMS_PER_PAGE = 6;

const UserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("/api/contributors");
        const data: ApiUser[] = await response.json(); // Use the ApiUser interface
        const formattedData = data.map((user) => ({
          name: user.name,
          githubUsername: user.githubusername,
        }));
        setUsers(formattedData);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);

  // Calculate total pages based on the number of users
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row mt-10">
        {Array.isArray(currentUsers) && currentUsers.length > 0 ? (
          currentUsers.map((user, index) => (
            <div
              key={index}
              className="max-w-sm mx-3 mb-4 p-6 bg-white border border-gray-300 hover:border-t-transparent hover:border-l-transparent transition duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50 hover:translate-x-[-5px] hover:translate-y-[-5px]"
            >
              <h2 className="text-xl font-semibold text-gray-900">Name: {user.name}</h2>
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

      {/* Pagination Controls */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 3 && <PaginationEllipsis />}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UserCard;
