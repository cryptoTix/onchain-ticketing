import { Request, Response } from "express";
import { ApiResponse, CityMetadata } from "shared";
import { getCities } from "./service";

export async function fetchCities(
  req: Request<{},{},{},{}>,
  res: Response<ApiResponse<CityMetadata[]>>,
  next: any
) {
    try {
        const data = await getCities();
        console.log("response for cities:",data)
        res.json({ success: true, data, statusCode : 200 });
        return
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}
