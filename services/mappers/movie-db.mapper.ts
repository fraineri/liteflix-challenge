import { Movie, MovieExternal } from "@/types/movie";
import { MoviePlayingResultDTO } from "../dto/movie-playing.dto";
import { MoviePopularResultDTO } from "../dto/movie-popular.dto";
import { MoviePersonalResultDTO } from "../dto/movie-personal.dto";

export const MapMoviePlayingResultDTOtoMovie = (
  moviePlayingResultDTO: MoviePlayingResultDTO
): MovieExternal => {
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
): MovieExternal => {
  return {
    id: moviePopularResultDTO.id,
    title: moviePopularResultDTO.title,
    releaseDate: moviePopularResultDTO.release_date,
    popularity: moviePopularResultDTO.popularity,
    voteAverage: moviePopularResultDTO.vote_average,
    backdropPath: moviePopularResultDTO.backdrop_path,
  };
};

export const MapMoviePersonalResultDTOtoMovie = (
  moviePersonalResultDTO: MoviePersonalResultDTO
): Movie => {
  return {
    id: moviePersonalResultDTO.id,
    title: moviePersonalResultDTO.title,
    releaseDate: moviePersonalResultDTO.upload_year,
    backdropPath: moviePersonalResultDTO.image_url,
  };
};
