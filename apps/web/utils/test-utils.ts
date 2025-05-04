import { Show } from '@src/models/Show';
import sellersData from '@src/data/sellers.json';

export const mockShow: Show = {
  id: "movie-1",
  name: "Dune: Part Two",
  image: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
  genre: "Science Fiction, Adventure",
  duration: "166",
  actor: "Timothée Chalamet, Zendaya, Rebecca Ferguson",
  rating: "PG-13",
  releaseDate: "2024-03-20T00:00:00Z",
  endDate: "2024-04-20T00:00:00Z",
  status: "ACTIVE"
};

export async function mockFetch(url: string) {
  if (url.includes('/api/sellers/')) {
    return {
      ok: true,
      json: async () => ({
        movie: mockShow,
        sellers: sellersData.sellers
      })
    };
  }
  throw new Error(`Unhandled request: ${url}`);
} 