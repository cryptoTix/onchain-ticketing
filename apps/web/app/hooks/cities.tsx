import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "../api/fetchPlatform";
import toast from "react-hot-toast";

export function useCities() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["cities"],
    queryFn: fetchCities,
    // We only need and want to fetch this once on mount, so setting these fields:
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isError) {
    toast.error("Error fetching cities, pls refresh")
    console.error("Error fetching cities:", error);
  }

  return {
    isLoading: isLoading || isError,
    data: data,
  }
}