"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Movie, MovieExternal } from "@/types/movie";
import MovieCard from "../server/MovieCard";
import useCatalogSelection from "@/context/catalog-selection.catalog";
import { GetPersonalMovies } from "@/services/movies.service";
import { useEffect, useRef, useState } from "react";
import { useIntersection } from "@mantine/hooks";
import { AiOutlineReload } from "react-icons/ai";
import { CATALOG } from "@/common/enum";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

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
  // const [sessionData, setSessionData] = useState<Session | null>();

  // useEffect(() => {
  //   (async () => {
  //     const session = await getSession();
  //     setSessionData(session);
  //   })();
  // }, []);

  // const {
  //   data: moviesFetched,
  //   fetchNextPage,
  //   isFetchingNextPage,
  //   hasNextPage,
  // } = useInfiniteQuery({
  //   queryKey: ["personal-movies"],
  //   queryFn: async ({ pageParam = 1 }) => {
  //     return await GetPersonalMovies(sessionData?.user.username!, pageParam);
  //   },
  //   getNextPageParam: (lastPage, pages) => {
  //     return lastPage?.length === 0 ? undefined : pages.length + 1;
  //   },
  //   initialData: {
  //     pages: [
  //       initialData.find((data) => data.catalog === CATALOG.PERSONAL)!.movies,
  //     ],
  //     pageParams: [1],
  //   },
  // });

  // useEffect(() => {
  //   if (entry?.isIntersecting) fetchNextPage();
  // }, [entry]);

  let movieCards;
  switch (catalogSelected) {
    case CATALOG.PERSONAL:
      // movieCards = moviesFetched?.pages.flat();
      movieCards = initialData.find(
        (data) => data.catalog === CATALOG.PERSONAL
      )!.movies;
      break;
    case CATALOG.POPULAR:
      movieCards = initialData.find(
        (data) => data.catalog === CATALOG.POPULAR
      )!.movies;
      break;
  }
  console.log("movieCards", movieCards);
  // moviesFetched!.pages.flat();

  return (
    <div className="flex flex-col justify-start items-center w-full lg:min-h-[640px]lg:max-h-[660px] lg:h-md:max-h-[460px] overflow-y-scroll">
      {movieCards &&
        (catalogSelected === CATALOG.PERSONAL
          ? movieCards.map((movie, index) =>
              index !== movieCards.length - 1 ? (
                <div key={movie.id} className="flex-shrink-0">
                  <MovieCard movie={movie} />
                </div>
              ) : (
                <div key={movie.id} ref={ref} className="flex-shrink-0">
                  <MovieCard movie={movie} />
                </div>
              )
            )
          : movieCards.map((movie: Movie) => {
              return (
                <div key={movie.id} ref={ref} className="flex-shrink-0">
                  <MovieCard key={movie.id} movie={movie} />
                </div>
              );
            }))}

      {/* {isFetchingNextPage && hasNextPage && (
        <AiOutlineReload size={25} className="animate-spin text-white" />
      )} */}
    </div>
  );
};

export default CatalogList;
