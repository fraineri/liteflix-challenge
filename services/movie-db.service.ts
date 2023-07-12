"use server";

import { THE_MOVIE_BASE_URL, THE_MOVIE_TOKEN } from "@/common/constants";

export const movieDbGetNowPlaying = async () => {
  const res = await fetch(`${THE_MOVIE_BASE_URL}/3/movie/now_playing`, {
    headers: {
      Authorization: `Bearer ${THE_MOVIE_TOKEN}`,
      accept: "application/json",
    },
  });

  return await res.json();
};

export const movieDbGetMoviePopular = async () => {
  const res = await fetch(`${THE_MOVIE_BASE_URL}/3/movie/popular`, {
    headers: {
      Authorization: `Bearer ${THE_MOVIE_TOKEN}`,
      accept: "application/json",
    },
  });

  return await res.json();
};

export const movieDbGetNowPlayingTop = async (amount?: number | 1) => {
  const res = await movieDbGetNowPlaying();
  const topMovie = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovie;
};

export const movieDbGetMoviePopularTop = async (amount?: number | 1) => {
  const res = await movieDbGetMoviePopular();
  const topMovies = res.results
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, amount);

  return topMovies;
};
