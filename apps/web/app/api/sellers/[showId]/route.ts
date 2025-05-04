import { NextResponse } from 'next/server';
import { MovieService } from '@src/services/movieService';
import { SellerService } from '@src/services/sellerService';
import sellersData from '@src/data/sellers.json';

export async function GET(
  request: Request,
  { params }: { params: { showId: string } }
) {
  try {
    const movieService = new MovieService();
    const sellerService = new SellerService();

    const movie = await movieService.getMovie(params.showId);
    if (!movie) {
      return NextResponse.json(
        { error: 'Movie not found or no longer showing' },
        { status: 404 }
      );
    }

    const sellers = await sellerService.getSellers(params.showId);
    if (!sellers.length) {
      return NextResponse.json(
        { error: 'No shows available for today' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      movie,
      showDate: sellersData.showDate,
      sellers
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
} 