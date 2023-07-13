export type MoviePlayingDTO = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MoviePlayingResultDTO[];
  total_pages: number;
  total_results: number;
};

export type MoviePlayingResultDTO = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
