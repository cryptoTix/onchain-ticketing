import MovieCard from "../MovieCard/MovieCard";
import { useRouter } from "next/navigation";
import { MovieInterface } from "../../../../../shared";
import { Suspense, useEffect, useState } from "react";
import { ToastNotification } from "../Toast/ToastNotification";
import { fetchMovies } from "../../api/fetchMovies";
import { RedirectCard } from "../Redirect/RedirectCard";
import { useLocationStore } from "../../store/location";
import { LandingLoader, SellersLoader } from "../Loader/Loader";
import { AnimatePresence } from "framer-motion";
import MotionDiv from "../Motion/MotionDiv";
import { LOADER_MOTION, PAGE_CONTENT_MOTION } from "../Motion/presets";

export const MainPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const router = useRouter();
  const [loadingData, setLoadingData] = useState<boolean>(true)
  const [isNavigating, setIsNavigating] = useState<boolean>(false)
  const { location : selectedLocation } = useLocationStore()

  useEffect(() => {
    setLoadingData(true)
    async function loadMovies() {
      const data = await fetchMovies(null);
      setMovies(data);
      setTimeout(() => {
        setLoadingData(false)
      }, 1000);
    }
    loadMovies();
  }, [selectedLocation]);

  const handleMovieClick = (movieId: string) => {
    setIsNavigating(true)
    router.push(`/sellers/${movieId}?city=${selectedLocation}`);
  };
  if (isNavigating) return <SellersLoader/>

  return (
    <AnimatePresence mode="wait">
      {loadingData ? (
        <MotionDiv
          key="mainpage-loader"
          preset={LOADER_MOTION}
          className="w-full mt-auto"
        >
          <LandingLoader/>
        </MotionDiv>
      ) : (
        <MotionDiv
          key="mainpage-content"
          preset={PAGE_CONTENT_MOTION}
        >
          <div className= "flex flex-col items-center mt-12 w-full gap-12">
            <ToastNotification/>
            <Suspense>
              <RedirectCard />
            </Suspense>
            <div className="text-4xl font-bold">Book Movies With Crypto</div>
            <div className="mt-10 mx-auto max-w-6xl p-5 rounded-lg flex items-center space-x-10">
              {
                movies.length === 0 ?
                  <p>No Shows Found</p> :
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                    {
                      movies.map((movie) => (
                        <MovieCard key={movie.id} show={movie} onShowClick={handleMovieClick}/>
                      ))
                    }
                  </div>        
              }  
            </div> 
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};
