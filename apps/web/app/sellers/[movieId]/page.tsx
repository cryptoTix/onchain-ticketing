"use client"

import Button from "../../components/Button/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieInterface, SellerInterface } from "../../../../../shared";
import { fetchMovies } from "../../api/fetchMovies";
import { fetchSellers } from "../../api/fetchSellers";
import SellerCard from "../../components/SellerCard/SellerCard";
import { ShowState } from "../../types/state/ShowState";
import { displayLongDate, displayTime } from "../../utils/helpers";
import  DateCard  from "../../components/DateCard/DateCard";
import { ToastNotification } from "../../components/Toast/ToastNotification";
import { RedirectCard } from "../../components/Redirect/RedirectCard";
import { useLocationStore } from "../../store/location";
import Image from "next/image";


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
  const [selectedDate, setSelectedDate] = useState<Date>(NOW);
  const {location} = useLocationStore()

  useEffect(() => {
    async function loadShows() {
      const data = params;
      setMovieId(data.movieId);
    }
    loadShows();
  }, []);
  const [selectedShow, setSelectedShow] = useState<ShowState| null>(null);

  useEffect(() => {
    async function loadEventData() {
      if (!movieId || movieId == "" || !selectedDate || !location) return;
      const movieMetadata = await fetchMovies(movieId);
      if (movieMetadata.length != 1) {
        console.log("unable to fetch movie", movieId)
        return
      }
      setMovieData(movieMetadata[0]);
      const sellersData = await fetchSellers({movieId, showDate : selectedDate.getTime(), location});
      setSellers(sellersData)
      console.log(movieId, movieData, sellers);
    }
    loadEventData();
  }, [movieId, selectedDate, location]);

  const handleTimeSelect = (showState: ShowState) => {
    setSelectedShow(showState);
    // setTimeout(() => {
    //   const seatsSection = document.getElementById("seats-section");
    //   if (seatsSection) {
    //     seatsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    //   }
    // }, 100);
  }
  return (
    <div className="min-h-screen text-white w-full pt-8 flex">
      <ToastNotification/>
      <RedirectCard />
      {/* LEFT: Sellers List */}
      <div className="w-full space-y-4">
        <h1 className="text-3xl font-bold">{movieData?.name}</h1>
        <DateCard selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className="flex flex-col space-y-8">
          {sellers.length == 0 ? "No shows for this date" : sellers.map((seller, index) => (<SellerCard sellerData={seller} index={index} selectedShowId={selectedShow ? selectedShow.showId : ""} onSelectShowId={handleTimeSelect}/>))}
        </div>
        {selectedShow && <Button text="Select Seats" onClick={() =>router.push(`/seats?movieId=${movieId}&&sellerId=${selectedShow.sellerId}&&showId=${selectedShow.showId}`)}/>}
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

        {selectedShow && (
          <div id="seats-section" className="mt-6 w-full p-4 bg-gray-800 text-white rounded-lg">
            <div className="space-y-2 mt-4">
              <div className="text-2xl font-bold">{selectedShow.sellerName}</div>
              <p>{displayLongDate(selectedShow.showTime)}</p>
              <div className="flex flex-row justify-between w-full">
                <div className="text-2xl font-bold">{selectedShow.showType}</div>
                <div className="text-2xl font-bold">{displayTime(selectedShow.showTime)}</div>
              </div>
              {/* TODO: Handle screens here for multiple shows with same name and time*/}
              {/* <div className="flex justify-center">
                <button
                  className="mt-3 w-full bg-yellow-500 px-6 py-3 rounded-md text-black font-bold"
                  onClick={() => router.push(`/seats?movieId=${movieId}&&sellerId=${selectedShow.sellerId}&&showId=${selectedShow.showId}`)}
                  >
                  Select Seats
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};