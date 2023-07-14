"use server";

import { THE_MOVIE_BASE_URL, THE_MOVIE_TOKEN } from "@/common/constants";
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
  userId: string,
  page: number = 1
): Promise<MoviePersonalDTO> => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await Promise.resolve({
    page: 1,
    results: [
      {
        id: 1,
        image_url: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
        title: "Tom & Jerry",
        upload_year: "2023",
      },
      {
        id: 2,
        image_url: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
        title: "Tom & Jerry",
        upload_year: "2023",
      },
      {
        id: 3,
        image_url: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
        title: "Tom & Jerry",
        upload_year: "2023",
      },
      {
        id: 4,
        image_url: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
        title: "Tom & Jerry",
        upload_year: "2023",
      },
      {
        id: 5,
        image_url: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
        title: "Tom & Jerry",
        upload_year: "2023",
      },
    ],
    total_pages: 2,
    total_results: 8,
  });
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return {
    ...res,
    results: res.results.slice(startIndex, endIndex),
  };
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
  userId: string,
  page: number = 1
): Promise<Movie[]> => {
  const res = (await GetPersonalMoviesRaw(userId, page)).results;
  return res.map((movie) => MapMoviePersonalResultDTOtoMovie(movie));
};
