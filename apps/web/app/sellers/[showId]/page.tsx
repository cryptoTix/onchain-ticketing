"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchShow } from "../../utils/showlist";
import { ShowInterface } from "../../models/show";
import { Seller } from "@src/models/Show";
import { Show } from "@src/models/Show";

// TODO: Fetch these from api.
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
  showId: string
}

interface PageProps {
  params: {
    showId: string;
  };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [showId, setShowId] = useState<string>();
  const [movieData, setMovieData] = useState<Show | null>(null);
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDate, setShowDate] = useState<string>("");

  useEffect(() => {
    setShowId(params.showId);
  }, [params.showId]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`/api/sellers/${params.showId}`);
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to load data');
        }
        const data = await response.json();
        setMovieData(data.movie);
        setSellers(data.sellers);
        setShowDate(data.showDate);
      } catch (error: any) {
        console.error('Error loading data:', error);
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [params.showId]);

  const [selectedData, setSelectedData] = useState<{ id: string; type: string; time: string } | null>(null);
  
  // Get seller details based on showId
  const selectedSeller = sellers[0];
  // const movieData = fetchShow()

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white text-2xl">
        {error}
      </div>
    );
  }

  if (loading) {
    return <p className="text-white text-center">Loading sellers...</p>;
  }

  const handleTimeSelect = (sellerId: string, formatType: string, time: string) => {
    setSelectedData({ id: sellerId, type: formatType, time });
    setTimeout(() => {
      const seatsSection = document.getElementById("seats-section");
      if (seatsSection) {
        seatsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
  // if (!movieData) {
  //   return <div className="min-h-screen flex justify-center items-center bg-black text-white text-2xl">
  //   Loading...
  // </div>
  // }
  return (
    <div className="min-h-screen text-white p-10 flex gap-10 w-full">
      {/* LEFT: Sellers List */}
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-2">{movieData?.name}</h1>
        <p className="text-lg text-gray-400 mb-6">Show Date: {showDate}</p>

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
                        (selectedData?.time === time && selectedData?.type === format.type) 
                          ? "bg-blue-500" 
                          : "bg-gray-800 hover:bg-blue-500"
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
        {movieData?.image ? (
          <Image
            src={movieData.image}
            alt={movieData.name}
            width={300}
            height={400}
            className="rounded-lg"
          />
        ) : (
          <div className="w-[300px] h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">No image available</p>
          </div>
        )}
        <h1 className="text-5xl font-bold mt-5 leading-loose text-left">{movieData?.name}</h1>
        <p className="text-gray-400">Genre: {movieData?.genre}</p>
        <p className="text-gray-400">Duration: {movieData?.duration} mins</p>
        <p className="text-gray-400">Actor: {movieData?.actor}</p>
        <p className="text-gray-400">Rating: {movieData?.rating}</p>

        {selectedData && (
          <div id="seats-section" className="mt-6 w-full p-4 bg-gray-800 text-white rounded-lg text-center">
            <p className="text-lg">
              {selectedData.id} - {selectedData.type} at {selectedData.time}
            </p>
             {/* TODO: Handle screens here for multiple shows with same name and time*/}
            <button
              className="mt-3 bg-yellow-500 px-6 py-3 rounded-md text-black font-bold"
              onClick={() => router.push(`/seats?showId=${showId}&&sellerId=${selectedData.id}&&time=${selectedData.time}`)}
            >
              Select Seats
            </button>
          </div>
        )}
      </div>
    </div>
  );
};