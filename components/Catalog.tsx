"use client";

import { movieDbGetMoviePopularTop } from "@/services/movie-db.service";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MovieCard from "./server/MovieCard";

type CatalogProps = {
  popularShowAmount: number;
};
const Catalog: React.FC<CatalogProps> = ({ popularShowAmount }) => {
  const { data: movies, status } = useQuery({
    queryKey: ["movie-popular_prefetched", popularShowAmount],
    queryFn: () => movieDbGetMoviePopularTop(popularShowAmount),
  });

  const handleCatalogSelector = () => {}

  return (
    <div className="bg-dark-grey pb-1">
      <CatalogSelector onSelect={handleCatalogSelector} />
      <div className="flex flex-col items-center w-full">
        {status === "success" &&
          movies.map((movie: any) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

type Option = {
  id: string;
  text: string;
};
const CatalogSelector = ({ onSelect }: { onSelect: any }) => {
  const options: Option[] = [
    {
      id: "popular",
      text: "Populares",
    },
    {
      id: "Own",
      text: "Mis peliculas",
    },
  ];

  const [currentSelector, setCurrentSelector] = useState<Option>(options[0]);

  return (
    <div className="font-bebas-neue uppercase tracking-widest text-[18px] text-center text-white mb-5">
      <span>VER:</span>{" "}
      <span className="font-[700] ml-2">{currentSelector.text}</span>{" "}
      <IoIosArrowDown size={20} className="inline" />
    </div>
  );
};

export default Catalog;
