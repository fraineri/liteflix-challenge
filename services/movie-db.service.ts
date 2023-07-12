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

export const movieDbGetNowPlayingTop = async () => {
  const res = await movieDbGetNowPlaying();
  const randomMovie = res.results.sort(
    (a: any, b: any) => b.popularity - a.popularity
  )[0];
  return randomMovie;
};
