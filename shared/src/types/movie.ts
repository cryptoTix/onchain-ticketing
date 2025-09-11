export interface MovieInterface {
    id: string;
    name: string;
    image: string;
    genre: string;
    duration: string
    actor: string
    rating: string
}

export type ShowInterface = {
    id : string;
    movieId : string;
    type : ShowType;
    price : number;
    showTime : number;
    screenId : string;
}

export type MovieRequestInterface = {
    movieId : string;
    location?: string;
}

export type ShowType = string