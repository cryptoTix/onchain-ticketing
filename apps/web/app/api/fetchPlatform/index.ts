import { ApiResponse, CityMetadata } from "../../../../../shared";
import { toast } from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

/**
 * Fetches all movie order metadata from the backend for a given wallet address.
 * @param address user's wallet address
 */
export async function fetchCities(): Promise<CityMetadata[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/cities`, {
      method: "GET",
    });
    console.log(res)
    if (!res.ok) {
        toast.error(`Failed to fetch movies`)
        return [];
    }
    const data: ApiResponse<CityMetadata[]> = await res.json();
    return data.data;

  } catch (err: any) {
    toast.error(`Failed to fetch cities`)
    return [];
  }
}
