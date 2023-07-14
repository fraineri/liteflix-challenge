export type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  backdropPath: string;
};

export type MovieExternal = {
  popularity: number;
  voteAverage: number;
} & Movie;
