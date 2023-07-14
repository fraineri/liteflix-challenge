"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie, MovieExternal } from "@/types/movie";
import MovieCard from "./server/MovieCard";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { GetPersonalMovies } from "@/services/movies.service";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { AiOutlineReload } from "react-icons/ai";
import { CATALOG } from "@/common/enum";

type CatalogListProps = {
  initialData: {
    catalog: CATALOG;
    movies: Movie[] | MovieExternal[];
  }[];
};

const CatalogList: React.FC<CatalogListProps> = ({ initialData }) => {
  const { catalogSelected } = useCatalogSelection();
  const lastMovieCardRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastMovieCardRef.current,
    threshold: 1,
  });

  const {
    data: moviesFetched,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["personal-movies"],
    queryFn: async ({ pageParam = 1 }) => {
      return await GetPersonalMovies("1", pageParam);
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage?.length === 0 ? undefined : pages.length + 1;
    },
    initialData: {
      pages: [
        initialData.find((data) => data.catalog === CATALOG.PERSONAL)!.movies,
      ],
      pageParams: [1],
    },
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);

  let movieCards;
  switch (catalogSelected) {
    case CATALOG.PERSONAL:
      movieCards = moviesFetched?.pages.flat();
      break;
    case CATALOG.POPULAR:
      movieCards = initialData.find(
        (data) => data.catalog === CATALOG.POPULAR
      )!.movies;
      break;
  }
  moviesFetched!.pages.flat();

  return (
    <div className="flex flex-col items-center w-full">
      {movieCards &&
        (catalogSelected === CATALOG.PERSONAL
          ? movieCards.map((movie, index) =>
              index !== movieCards.length - 1 ? (
                <MovieCard key={movie.id} movie={movie} />
              ) : (
                <div key={movie.id} ref={ref}>
                  <MovieCard movie={movie} />
                </div>
              )
            )
          : movieCards.map((movie: Movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            }))}

      {isFetchingNextPage && hasNextPage && (
        <AiOutlineReload size={25} className="animate-spin text-white" />
      )}
    </div>
  );
};

export default CatalogList;
