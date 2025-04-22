import { ShowInterface } from "../models/show";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
import "../../public/Frame_36.png";
type FetchShowsParams = {
  showFeatured?: boolean;
};

const showMap: Record<string, ShowInterface> = {
  '0' : {
    id: "0",
    name: "Furiosa",
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
  '4' : {
    id: "4",
    name: "DUHH",
    image: "/Movie_3.png",
    genre: "WDYT",
    duration:"2:40 Hrs",
    actor: "MC Potu",
    rating: "3.78",
}, 
  '3' : {
    id: "3",
    name: "CID",
    image: "/CID.png",
    genre: "Bakchodi",
    duration:"2:40 Hrs",
    actor: "ACP Behen ke lund",
    rating: "5",
},
};
// Fetch properties from the API
export async function fetchShows({
  showFeatured = false,
}: FetchShowsParams = {}) {
    const shows = [] as ShowInterface[];
    for (const key in showMap) {
      shows.push(showMap[key]!);
    }
    return shows;
//   try {
//     if (!apiDomain) return showFeatured ? [] : { properties: [], total: 0 };
//     const response = await fetch(
//       `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
//       {
//         cache: "no-store",
//       }
//     );
//     if (!response.ok) throw new Error("Failed to fetch data");
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//     return showFeatured ? [] : { properties: [], total: 0 };
//   }
}

// Fetch a single property from the API
export async function fetchShow(
  id: string
): Promise<ShowInterface | null> {
  return showMap[id]!;
  // try {
  //   if (!apiDomain) return null;
  //   const response = await fetch(`${apiDomain}/properties/${id}`);
  //   if (!response.ok) throw new Error("Failed to fetch data");
  //   return await response.json();
  // } catch (error) {
  //   console.log(error);
  //   return null;
  // }
}
