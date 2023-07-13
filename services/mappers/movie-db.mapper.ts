import { Movie } from "@/types/movie";
import { MoviePlayingResultDTO } from "../dto/movie-playing.dto";
import { MoviePopularResultDTO } from "../dto/movie-popular.dto";

export const MapMoviePlayingResultDTOtoMovie = (
  moviePlayingResultDTO: MoviePlayingResultDTO
): Movie => {
  return {
    id: moviePlayingResultDTO.id,
    title: moviePlayingResultDTO.title,
    releaseDate: moviePlayingResultDTO.release_date,
    popularity: moviePlayingResultDTO.popularity,
    voteAverage: moviePlayingResultDTO.vote_average,
    backdropPath: moviePlayingResultDTO.backdrop_path,
  };
};

export const MapMoviePopularResultDTOtoMovie = (
  moviePopularResultDTO: MoviePopularResultDTO
): Movie => {
  return {
    id: moviePopularResultDTO.id,
    title: moviePopularResultDTO.title,
    releaseDate: moviePopularResultDTO.release_date,
    popularity: moviePopularResultDTO.popularity,
    voteAverage: moviePopularResultDTO.vote_average,
    backdropPath: moviePopularResultDTO.backdrop_path,
  };
};
