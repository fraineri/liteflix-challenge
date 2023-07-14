export type MoviePersonalDTO = {
  page: number;
  results: MoviePersonalResultDTO[];
  total_pages: number;
  total_results: number;
};

export type MoviePersonalResultDTO = {
  id: number;
  image_url: string;
  title: string;
  upload_year: string;
};
