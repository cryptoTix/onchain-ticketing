"use client"

import Image from "next/Image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchShow } from "../../utils/showlist";
import { MovieInterface, SellerInterface, ShowInterface, ShowType } from "../../../../../shared";
import { fetchMovies } from "../../api/fetchMovies";
import { fetchSellers } from "../../api/fetchSellers";
import SellerCard from "../../components/SellerCard/SellerCard";
import { ShowState } from "../../types/state/ShowState";
import { displayLongDate, displayTime } from "../../utils/helpers";
import  DateCard  from "../../components/DateCard/DateCard";


interface SellerInput {
  movieId: string
}

export default function Page({
  params
}: {
  params: SellerInput
}) {
  const NOW = new Date(Date.now());
  const router = useRouter();
  const [movieId, setMovieId] = useState<string>();
  const [movieData, setMovieData] = useState<MovieInterface>();
  const [sellers, setSellers] = useState<SellerInterface[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(NOW)

  useEffect(() => {
    async function loadShows() {
      const data = params;
      setMovieId(data.movieId);
    }
    loadShows();
  }, []);
  const [selectedShowId, setSelectedShowId] = useState<ShowState| null>(null);

  useEffect(() => {
    async function loadEventData() {
      const movieMetadata = await fetchMovies(movieId);
      if (!movieId || movieId == "") return;
      if (movieMetadata.length != 1) {
        console.log("unable to fetch movie", movieId)
        return
      }
      setMovieData(movieMetadata[0]);
      const sellersData = await fetchSellers({movieId, showDate : selectedDate.getTime()});
      setSellers(sellersData)
      console.log(movieId, movieData, sellers);
    }
    loadEventData();
  }, [movieId, selectedDate]);

  const handleTimeSelect = (showState: ShowState) => {
    setSelectedShowId(showState);
    setTimeout(() => {
      const seatsSection = document.getElementById("seats-section");
      if (seatsSection) {
        seatsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
  return (
    <div className="min-h-screen text-white w-full pt-8 flex">
      {/* LEFT: Sellers List */}
      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold">{movieData?.name}</h1>
        <DateCard selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className="flex flex-col space-y-8">
          {sellers.map((seller, index) => (<SellerCard sellerData={seller} index={index} selectedDate={selectedDate} onSelectShowId={handleTimeSelect}/>))}
        </div>
      </div>

      {/* RIGHT: Movie Metadata */}
      <div className="w-1/3 flex flex-col items-centre">
        <Image src={movieData?.image} alt={movieData?.name} width={300} height={400} className="rounded-lg" />
        <h1 className={`font-bold mt-5 leading-loose text-left 
          ${movieData?.name.length > 20
              ? 'text-xl'
              : movieData?.name.length > 12
              ? 'text-2xl'
              : 'text-3xl'
          }`}
          >
            {movieData?.name}
        </h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-400 w-full">
          <div className="flex">
            <span className="font-semibold">Genre</span>
          </div>
          <div className="flex">
            <span className="pl-2">{movieData?.genre}</span>
          </div>
          <div className="flex">
            <span className="font-semibold">Duration</span>
          </div>
          <div className="flex">
            <span className="pl-2">{movieData?.duration}</span>
          </div>
          <div className="flex">
            <span className="font-semibold">Rating</span>
          </div>
          <div className="flex">
            <span className="pl-2">{movieData?.rating}</span>
          </div>
        </div>

        {selectedShowId && (
          <div id="seats-section" className="mt-6 w-full p-4 bg-gray-800 text-white rounded-lg">
            <div className="space-y-2 mt-4">
              <div className="text-2xl font-bold">{selectedShowId.sellerName}</div>
              <p>{displayLongDate(selectedShowId.showTime)}</p>
              <div className="flex flex-row justify-between w-full">
                <div className="text-2xl font-bold">{selectedShowId.showType}</div>
                <div className="text-2xl font-bold">{displayTime(selectedShowId.showTime)}</div>
              </div>
              {/* TODO: Handle screens here for multiple shows with same name and time*/}
              <div className="flex justify-center">
                <button
                  className="mt-3 w-full bg-yellow-500 px-6 py-3 rounded-md text-black font-bold"
                  onClick={() => router.push(`/seats?movieId=${movieId}&&sellerId=${selectedShowId.sellerId}&&showId=${selectedShowId.showId}`)}
                  >
                  Select Seats
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};