import MovieCard from "../MovieCard/MovieCard";
import { useRouter } from "next/navigation";
import { MovieInterface } from "../../../../../shared";
import { Suspense, useEffect, useState } from "react";
import { ToastNotification } from "../Toast/ToastNotification";
import { fetchMovies } from "../../api/fetchMovies";
import { RedirectCard } from "../Redirect/RedirectCard";
import { useLocationStore } from "../../store/location";

export const MainPage: React.FC = () => {
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const router = useRouter();
  const { location : selectedLocation } = useLocationStore()

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMovies(null);
      setMovies(data);
    }
    loadMovies();
  }, []);

  const handleMovieClick = (movieId: string) => {
    router.push(`/sellers/${movieId}?city=${selectedLocation}`);
  };
  return (
    <div className= "flex flex-col items-center mt-12 w-full gap-12">
      <ToastNotification/>
      <Suspense>
        <RedirectCard />
      </Suspense>
      <div className="text-4xl font-bold">Book Movies With Crypto</div>
      {/* Movie Details Section (Side-by-Side) */}
      <div className="mt-10 mx-auto max-w-6xl p-5 rounded-lg flex items-center space-x-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {movies.length === 0 ? (
              <p>No Shows Found</p>
            ) : (
              movies.map((movie) => (
                <MovieCard key={movie.id} show={movie} onShowClick={handleMovieClick}/>
              ))
            )}
          </div>
        {/* Movie Image */}
        {/* <div className="w-1/2">
          <Image src={spiderMan} alt="Spiderman" className="rounded-md"
            width={1500}
            height={1700}
            style={{ maxWidth: "100%", height: "auto" }}/>
        </div> */}

        {/* Movie Details */}
        {/* <div className="w-1/2 text-left">
          <p className="text-lg font-semibold">
            Current Price: <span className="text-yellow-400">20.88 ETH</span>
          </p>
          <p className="text-lg">
            Movie Time: <span className="text-green-400">08:24:11</span>
          </p>
        </div> */}
      </div>
      {/* <Tab.Group> */}
        {/* <Tab.List className="w-[23rem] custom-sm:w-[24.5rem] flex items-center justify-center gap-2 py-[1px] bg-gray-100 border border-gray-50 rounded-full"> */}
          {/* <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-l-full rounded-r-full shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={selected ? restakeDark : restakeLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Restake</p>
                </div>
              </div>
            )}
          </Tab> */}
          {/* <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-full shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-2 items-center">
                  <Image
                    src={selected ? portfolioDark : portfolioLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Portfolio</p>
                </div>
              </div>
            )}
          </Tab>
          <Tab className="outline-none">
            {({ selected }) => (
              <div
                className={`${selected ? `bg-white rounded-full text-black shadow-sm` : `transparent text-[#97989A]`} my-1 px-4 py-[1px] outline-none`}
              >
                <div className="flex gap-[0.375rem] items-center">
                  <Image
                    src={selected ? exploreDark : exploreLight}
                    alt=""
                    className="size-4 custom-sm:size-5"
                  />
                  <p className="text-sm custom-sm:text-base">Explore</p>
                </div>
              </div>
            )}
          </Tab> */}
        {/* </Tab.List> */}
        {/* <Tab.Panels className="w-full"> */}
          {/* <Tab.Panel>
            <Orderbox />
          </Tab.Panel> */}
          {/* <Tab.Panel>
            <Portfolio />
          </Tab.Panel>
          <Tab.Panel>
            <Operators />
            <DSSs />
          </Tab.Panel> */}
        {/* </Tab.Panels> */}
      {/* </Tab.Group> */}
      {/* <Tvl /> */}
    </div>
  );
};
