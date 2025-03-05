"use client";

export const DSSLoadingCard: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 grid-pool-sm:grid-cols-2 grid-pool-md:grid-cols-3 gap-4">
      <div
        className="flex flex-col gap-4 border border-light-gray-border px-6 py-12 rounded-md hover:cursor-pointer hover:bg-gray-100"
      >
        <div className="flex gap-2 items-center mb-8">
          <div className="animate-pulse flex space-x-4 w-full">
            <div className="rounded-md bg-gray-300 h-8 w-9/12 mr-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="animate-pulse flex space-x-4 w-full">
            <div className="rounded-md bg-gray-300 h-8 w-full" />
          </div>
          <div className="animate-pulse flex space-x-4 w-full">
            <div className="rounded-md bg-gray-300 h-8 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
