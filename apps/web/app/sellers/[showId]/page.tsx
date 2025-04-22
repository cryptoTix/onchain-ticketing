"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchShow } from "../../utils/showlist";
import { ShowInterface } from "../../models/show";

// TODO: Fetch these from API.
const sellers = [
  {
    id: "grand-indonesia-cgv",
    name: "Grand Indonesia CGV",
    location: "JL. MH. TAHRIN NO.1",
    formats: [
      { type: "Regular 2D", price: "20.88 ETH", times: ["11:00", "13:45", "14:40", "15:40", "17:15"] },
      { type: "Gold Class 2D", price: "20.88 ETH", times: ["12:40", "15:40", "18:35", "17:10"] },
    ],
  },
  {
    id: "mangga-dua-cinepolis",
    name: "Mangga Dua Square Cinépolis",
    location: "JL. MH. TAHRIN NO.1",
    formats: [{ type: "2D", price: "20.88 ETH", times: ["13:45", "17:15", "20:00"] }],
  },
  {
    id: "plaza-indonesia-xxi",
    name: "Plaza Indonesia XXI",
    location: "JL. MH. TAHRIN NO.1",
    formats: [{ type: "2D", price: "Rp. 50.000", times: ["12:10", "16:45", "19:45"] }],
  },
];

interface SellerInput {
  showId: string;
}

export default function Page({ params }: { params: Promise<SellerInput> }) {
  const router = useRouter();
  const [showId, setShowId] = useState<string>();
  const [movieData, setMovieData] = useState<ShowInterface>();
  const [selectedData, setSelectedData] = useState<{ id: string; type: string; time: string } | null>(null);
  
  // Date selection
  const [selectedDate, setSelectedDate] = useState("16 Dec MON"); // Default date
  const dates = [
    { day: "15 Dec", label: "SUN" },
    { day: "16 Dec", label: "MON" },
    { day: "17 Dec", label: "TUE" },
    { day: "18 Dec", label: "WED" },
    { day: "19 Dec", label: "THU" },
  ];

  useEffect(() => {
    async function loadShows() {
      const data = await params;
      setShowId(data.showId);
    }
    loadShows();
  }, []);

  useEffect(() => {
    if (!showId) return;
    async function loadEventData() {
      const data = await fetchShow(showId);
      setMovieData(data!);
      console.log(showId, data);
    }
    loadEventData();
  }, [showId]);

  const handleTimeSelect = (sellerId: string, formatType: string, time: string) => {
    setSelectedData({ id: sellerId, type: formatType, time });
    setTimeout(() => {
      const seatsSection = document.getElementById("seats-section");
      if (seatsSection) {
        seatsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleNavigateToSeats = () => {
    if (selectedData) {
      router.push(`/seats?showId=${showId}&&sellerId=${selectedData.id}&&time=${selectedData.time}`);
    }
  };

  return (
    <div className="min-h-screen text-white p-10 flex gap-10 w-full">
      {/* LEFT: Date Selection (Vertical Layout) */}
      <div className="w-1/6 flex flex-col gap-2">
        {dates.map((date, index) => (
          <button
            key={index}
            className={`p-3 rounded-md ${
              selectedDate === date.day + " " + date.label ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => setSelectedDate(date.day + " " + date.label)}
          >
            <p className="text-sm">{date.day}</p>
            <p className="text-lg font-bold">{date.label}</p>
          </button>
        ))}
      </div>

      {/* MIDDLE: Sellers List */}
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-4">{movieData?.name}</h1>

        {sellers.map((seller, index) => (
          <div key={index} className="p-5 rounded-lg mb-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">⭐ {seller.name}</h2>
            <p className="text-sm text-gray-400">{seller.location}</p>

            {seller.formats.map((format, idx) => (
              <div key={idx} className="mt-3">
                <h3 className="text-md font-semibold">{format.type} - {format.price}</h3>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {format.times.map((time) => (
                    <button
                      key={time}
                      className={`px-4 py-2 rounded-md ${
                        selectedData?.time === time && selectedData?.type === format.type ? "bg-blue-500" : "bg-gray-800 hover:bg-blue-500"
                      } transition`}
                      onClick={() => handleTimeSelect(seller.id, format.type, time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* RIGHT: Movie Metadata */}
      <div className="w-1/3 flex flex-col items-center p-5 rounded-lg">
        <Image src={movieData?.image} alt={movieData?.name} width={300} height={400} className="rounded-lg" />
        <h2 className="text-xl font-bold mt-3">{movieData?.name}</h2>
        <p className="text-gray-400">Genre: {movieData?.genre}</p>
        <p className="text-gray-400">Duration: {movieData?.duration}</p>
        <p className="text-gray-400">Actor: {movieData?.actor}</p>
        <p className="text-gray-400">Rating: {movieData?.rating}</p>

        {selectedData && (
          <div id="seats-section" className="mt-6 w-full p-4 bg-gray-800 text-white rounded-lg text-center">
            <p className="text-lg">
              {selectedData.id} - {selectedData.type} at {selectedData.time}
            </p>
            <button
              className="mt-3 bg-yellow-500 px-6 py-3 rounded-md text-black font-bold"
              onClick={handleNavigateToSeats}
            >
              Select Seats
            </button>
          </div>
        )}
      </div>
    </div>
  );
}