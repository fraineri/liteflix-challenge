export type MoviePersonalDTO = {
  page: number;
  movies: MoviePersonalResultDTO[];
};

export type MoviePersonalResultDTO = {
  id: number;
  url: string;
  title: string;
  uploadedAt: Date;
};
