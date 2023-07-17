"use server";

import {
  BACKEND_BASE_URL,
  THE_MOVIE_BASE_URL,
  THE_MOVIE_TOKEN,
} from "@/common/constants";
import { MoviePopularDTO } from "./dto/movie-popular.dto";
import { MoviePlayingDTO } from "./dto/movie-playing.dto";
import { Movie, MovieExternal } from "@/types/movie";
import {
  MapMoviePersonalResultDTOtoMovie,
  MapMoviePlayingResultDTOtoMovie,
  MapMoviePopularResultDTOtoMovie,
} from "./mappers/movie-db.mapper";
import { MoviePersonalDTO } from "./dto/movie-personal.dto";

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

export const GetPersonalMoviesRaw = async (
  userName: string,
  page: number = 1,
  limit: number = 999
): Promise<MoviePersonalDTO> => {
  const pageParam = `page=${(page - 1)}`;
  const limitParam = `limit=${3}`;
  const username = `username=${userName}`;
  const queryParams = `?${pageParam}&${limitParam}&${username}`;
  
  const resp = await fetch(
    `${BACKEND_BASE_URL}/movie-upload/list${queryParams}`,
    {
      cache: "no-cache",
    }
  );


  return await resp.json();
};

// BUSINESS METHODS

export const movieDbGetNowPlayingTop = async (
  amount: number = 1
): Promise<MovieExternal[]> => {
  const res = await movieDbGetNowPlaying();

  const topMovie = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovie.map((movie) => MapMoviePlayingResultDTOtoMovie(movie));
};

export const movieDbGetMoviePopularTop = async (
  amount: number = 1
): Promise<MovieExternal[]> => {
  const res = await movieDbGetMoviePopular();
  const topMovies = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovies.map((movie) => MapMoviePopularResultDTOtoMovie(movie));
};

export const GetPersonalMovies = async (
  userName: string,
  page: number = 1
): Promise<Movie[]> => {
  const res = (await GetPersonalMoviesRaw(userName, page)).movies;
  return res?.map((movie) => MapMoviePersonalResultDTOtoMovie(movie)) ?? [];
};
