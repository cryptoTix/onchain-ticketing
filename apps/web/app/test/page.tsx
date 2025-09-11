"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const SellersPage = () => {
  const router = useRouter();
    const showId = 0;
//   const { showId } = router.query; // Get show ID from URL
  console.log("fetched ", showId);

//   const [theatres, setTheatres] = useState<any[]>([]);

//   useEffect(() => {
//     if (showId) {
//       // Fetch theatre data for the selected show (Replace with API call)
//       setTheatres([
//         { id: "1", name: "IMAX Cinema", location: "Downtown" },
//         { id: "2", name: "Regal Theatre", location: "City Center" },
//         { id: "3", name: "Cineplex", location: "Mall Road" },
//       ]);
//     }
//   }, [showId]);
    const theatres = [
        { id: "1", name: "IMAX Cinema", location: "Downtown" },
        { id: "2", name: "Regal Theatre", location: "City Center" },
        { id: "3", name: "Cineplex", location: "Mall Road" },
      ];
  return (
    <div className="flex flex-col items-center mt-12 w-full gap-8">
      <h1 className="text-3xl font-bold">Select a Theatre for Show ID: {showId}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {theatres.length === 0 ? (
          <p>Loading theatres...</p>
        ) : (
          theatres.map((theatre) => (
            <div key={theatre.id} className="p-5 border rounded-lg bg-gray-800 text-white">
              <h2 className="text-xl font-semibold">{theatre.name}</h2>
              <p>{theatre.location}</p>
              <button
                onClick={() => router.push(`/booking/${theatre.id}`)}
                className="mt-3 bg-blue-500 px-4 py-2 rounded-md"
              >
                Select Theatre
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SellersPage;
