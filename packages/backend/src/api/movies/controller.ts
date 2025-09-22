import { Request, Response } from "express";
import { getMovies } from "./service";
import { ApiResponse, MovieInterface, MovieRequestInterface } from "shared";

export async function fetchMovies(
  req: Request<{},{},{},MovieRequestInterface>,
  res: Response<ApiResponse<MovieInterface[]>>,
  next: any
) {
    try {
        const data = await getMovies(req.query);
        console.log("response for:", req.query, data)
        res.json({ success: true, data, statusCode : 200 });
        return
    } catch (error) {
        console.log("got err:", error)
        res.status(500).json({ success: false, statusCode : 500 });
        return
    }
}
