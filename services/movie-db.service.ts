"use server";

import { THE_MOVIE_BASE_URL, THE_MOVIE_TOKEN } from "@/common/constants";
import { MoviePopularDTO } from "./dto/movie-popular.dto";
import { MoviePlayingDTO } from "./dto/movie-playing.dto";
import { Movie } from "@/types/movie";
import {
  MapMoviePlayingResultDTOtoMovie,
  MapMoviePopularResultDTOtoMovie,
} from "./mappers/movie-db.mapper";

export const movieDbGetNowPlaying = async (): Promise<MoviePlayingDTO> => {
  const res = await fetch(`${THE_MOVIE_BASE_URL}/3/movie/now_playing`, {
    headers: {
      Authorization: `Bearer ${THE_MOVIE_TOKEN}`,
      accept: "application/json",
    },
  });

  return await res.json();
};

export const movieDbGetMoviePopular = async (): Promise<MoviePopularDTO> => {
  const res = await fetch(`${THE_MOVIE_BASE_URL}/3/movie/popular`, {
    headers: {
      Authorization: `Bearer ${THE_MOVIE_TOKEN}`,
      accept: "application/json",
    },
  });

  return await res.json();
};

export const movieDbGetNowPlayingTop = async (
  amount: number = 1
): Promise<Movie[]> => {
  const res = await movieDbGetNowPlaying();
  const topMovie = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovie.map((movie) => MapMoviePlayingResultDTOtoMovie(movie));
};

export const movieDbGetMoviePopularTop = async (
  amount: number = 1
): Promise<Movie[]> => {
  const res = await movieDbGetMoviePopular();
  const topMovies = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovies.map((movie) => MapMoviePopularResultDTOtoMovie(movie));
};
