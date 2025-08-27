import { MovieInterface } from "../types/movie";
class Movie {
    private movie : MovieInterface;
    constructor(showMetadata : MovieInterface) {
        this.movie = showMetadata
    }
    public get id() : string {return this.movie.id}
    public get image() : string {return this.movie.image}
    public get genre() : string {return this.movie.genre}
    public get rating() : string {return this.movie.rating}
}