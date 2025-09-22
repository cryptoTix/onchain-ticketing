import { MovieInterface } from "../../../../../shared";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";

type MovieCardProps = {
  show: MovieInterface;
  onShowClick : any
};


export const MovieCard: React.FC<MovieCardProps> = ({ show , onShowClick} ) => {
  return (
    <div className="rounded-xl shadow-md relative cursor-pointer hover:scale-105 transition-transform duration-200">
      <Image
        src={show.image}
        alt=""
        width={1000}
        height={1000}
        sizes="1000vw"
        className="w-full h-auto rounded-t-xl"
        onClick={() => onShowClick(show.id)}
      />
      <h1 className="text-xl font-bold text-center mt-2">{show.name}</h1>
      <h1 className="text-xl text-center mt-1 text-gray-400">{show.genre}</h1>
    </div>
  );
};
export default MovieCard;
