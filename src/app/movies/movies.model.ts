export interface movieCreationDTO {
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
    // actors: actorsMovieDTO[];

}

export interface movieDTO {
    id: number;
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    // genres: genreDTO[];
    // movieTheaters: movieTheatersDTO[];
    // actors: actorsMovieDTO[];
    averageVote: number;
    userVote: number;

}