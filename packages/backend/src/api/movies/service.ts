import { MovieInterface, MovieRequestInterface } from "../../../../../shared/index";

const showMap: Record<string, MovieInterface> = {
    '0' : {
      id: "0",
      name: "Furiosa: A Mad Max Saga",
      image: "/Movie.png",
      genre: "Thriller",
      duration: "01:20 Hrs",
      actor: "Chandu",
      rating: "4.9",
  }, 
    '1' : {
      id: "1",
      name: "IF",
      image: "/Movie_1.png",
      genre: "Comedy",
      duration:"2:40 Hrs",
      actor: "mama",
      rating: "4.98",
  }, 
    '2' : {
      id: "2",
      name: "Civil War",
      image: "/Movie_2.png",
      genre: "Action",
      duration:"2:40 Hrs",
      actor: "amgay",
      rating: "3.98",
  }, 
    '3' : {
      id: "3",
      name: "DUHH",
      image: "/Movie_3.png",
      genre: "WDYT",
      duration:"2:40 Hrs",
      actor: "duhh",
      rating: "3.78",
  }, 
  };

export async function getMovies(data : MovieRequestInterface) : Promise<MovieInterface[]> {
  console.log("fetching movies", data)
    const shows = [] as MovieInterface[];
    if (data.movieId && data.movieId != "") {
      shows.push(showMap[data.movieId]);
      
      return shows
    }
    for (const key in showMap) {
      shows.push(showMap[key]!);
    }
    return shows;
}