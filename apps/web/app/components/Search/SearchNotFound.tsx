"use client";

export const SearchNotFound: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 bg-[#FFF4ED] rounded-md py-12 px-4">
      <svg
        className="h-20 w-20 text-black"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
      <h2 className="text-2xl font-semibold text-light-black">
        No results found for your search
      </h2>
      <p className="text-light-gray">Try searching for another term</p>
    </div>
  );
};
