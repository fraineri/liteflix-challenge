"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { THE_MOVIE_IMAGE_BASE_URL } from "@/common/constants";
import { movieDbGetNowPlayingTop } from "@/services/movie-db.service";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactElement } from "react";

const HomeScreen = () => {
  const { data: movies, status } = useQuery({
    queryKey: ["movie-now-playing_prefetched"],
    queryFn: () => movieDbGetNowPlayingTop(),
  });

  // TODO: Add loading state
  if (status !== "success" || movies === undefined) {
    return null;
  }

  return (
    <div className="relative w-full h-screen">
      <Image
        src={`${THE_MOVIE_IMAGE_BASE_URL}/t/p/original${movies[0].backdropPath}`}
        fill
        alt={`Cover image for the movie ${movies[0].title}`}
        priority={true}
        className="object-cover z-0 pointer-events-none brightness-75 select-none"
      />
      <div className="absolute z-1 top-1/2 w-full">
        <HomeTitle title={movies[0].title} />
      </div>
      <div className="absolute bottom-0 w-full h-2/6 z-2 bg-gradient-to-t from-dark-grey via-dark-grey/60 to-transparent flex justify-center items-center">
        <div className="h-4/6 flex flex-col justify-between items-center">
          <ButtonRectangular
            bgColor="dark-grey"
            text="Reproducir"
            icon={<FiPlay size={20} className="inline mr-2" />}
          />

          <ButtonRectangular
            bgColor="dark-grey"
            border={true}
            borderColor="white"
            text="Mi Lista"
            icon={<AiOutlinePlus size={20} className="inline mr-2" />}
          />
        </div>
      </div>
    </div>
  );
};

type HomeTitleProps = {
  title: string;
};

const HomeTitle: React.FC<HomeTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bebas-neue uppercase">
      <div className="font-[400] text-xl text-white tracking-wide mb-1">
        Original de <span className="font-[700]">LITEFLIX</span>
      </div>
      <h2 className="z-10  font-[700] text-5xl text-aqua text-center tracking-wide">
        {title}
      </h2>
    </div>
  );
};

type ButtonRectangularProps = {
  bgColor: "dark-grey" | "light-grey" | "white";
  border?: boolean | false;
  borderColor?: "dark-grey" | "light-grey" | "white" | undefined;
  text: string;
  icon?: ReactElement | null;
};

const ButtonRectangular: React.FC<ButtonRectangularProps> = ({
  bgColor,
  border,
  borderColor,
  text,
  icon,
}) => {
  return (
    <button
      className={`flex flex-row justify-center items-center bg-${bgColor} w-[248px] h-[56px] text-white ${
        border ? `border border-${borderColor} border-spacing-1` : ""
      }`}
    >
      {icon !== null && icon}
      <span className="font-bebas-neue uppercase tracking-wide text-[18px]">
        {text}
      </span>
    </button>
  );
};

export default HomeScreen;
