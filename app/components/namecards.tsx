"use client";

import React, { useState, useEffect } from 'react';
import { contributors } from '../data/contributors';

interface User {
  name: string;
  github: string;
}

const UserCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(contributors);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row mt-10">
      {users.map((user, index) => (
        <div 
            key={index} 
            className="max-w-sm mx-3 mb-4 p-6 bg-white border border-gray-300 hover:border-t-transparent hover:border-l-transparent transition duration-300 ease-in-out shadow-lg hover:shadow-blue-500/50 hover:translate-x-[-5px] hover:translate-y-[-5px]"
        >
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
