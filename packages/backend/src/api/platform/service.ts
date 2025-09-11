import { CityMetadata, MovieInterface } from "../../../../../shared/index";

export async function getCities() : Promise<CityMetadata[]> {
  console.log("fetching cities")
  return [{cityName : "BHOPAL"}, {cityName : "DELHI"}, {cityName : "MUMBAI"}]
}