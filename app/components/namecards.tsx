"use client"

import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  github: string;
}

const UserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/users.json');
      const data: User[] = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className= "container mx-auto grid grid-cols-2 md:grid-cols-3 grid-flow-row items-center justify-center min-h-screen">
      {users.map((user, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border">
          <h2 className="text-xl font-semibold text-gray-900">Name: {user.name}</h2>
          <p className="text-gray-700 mt-2">
            GitHub: <a href={`https://github.com/${user.github}`} className="text-blue-600 hover:underline">@{user.github}</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
