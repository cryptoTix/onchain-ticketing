import { ApiResponse, MovieInterface } from "../../../../../shared";
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/**
 * Fetches all movie order metadata from the backend for a given wallet address.
 * @param address user's wallet address
 */
export async function fetchMovies(movieId : string | null): Promise<MovieInterface[]> {
  try {
    const res = await fetch(!movieId ? `${BASE_URL}/api/movies` : `${BASE_URL}/api/movies?movieId=${movieId}`, {
      method: "GET",
    });
    console.log(res)
    if (!res.ok) {
        toast.error(`Failed to fetch movies`)
        return [];
    }
    const data: ApiResponse<MovieInterface[]> = await res.json();
    return data.data;

  } catch (err: any) {
    toast.error(`Failed to fetch movies`)
    return [];
  }
}
