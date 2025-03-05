"use client";

import React from "react";

export function SmallSearchIcon() {
  return (
    <svg
      className="w-4 h-4 text-gray-500 dark:text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}

interface Props {
  searchTerm: string;
  handleSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <div className="relative w-10/12 md:w-[55%] mr-auto">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SmallSearchIcon />
      </div>
      <input
        type="text"
        className="block w-full p-4 ps-10 h-14 text-base text-gray-900 border border-gray-200 rounded-lg focus:outline-none placeholder:text-gray-400"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};
