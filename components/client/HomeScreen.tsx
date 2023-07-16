"use server";

import Image from "next/image";
import { THE_MOVIE_IMAGE_BASE_URL } from "@/common/constants";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactElement } from "react";
import { Movie } from "@/types/movie";
import { ButtonRectangular } from "./ui/ButtonRectangular";
import { COLORS } from "@/common/enum";

type HomeScreenProps = {
  movieScreen: Movie;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ movieScreen }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={`${THE_MOVIE_IMAGE_BASE_URL}/t/p/original${movieScreen.backdropPath}`}
        fill
        alt={`Cover image for the movie ${movieScreen.title}`}
        priority={true}
        className="object-cover z-0 pointer-events-none brightness-75 select-none"
      />
      <div className="absolute z-1 top-1/2 w-full">
        <HomeTitle title={movieScreen.title} />
      </div>
      <div className="absolute bottom-0 w-full h-2/6 z-2 bg-gradient-to-t from-dark-grey via-dark-grey/60 to-transparent flex justify-center items-center">
        <div className="h-4/6 flex flex-col justify-between items-center">
          <ButtonRectangular
            bgColor={COLORS.DARK_GREY}
            text="Reproducir"
            textColor={COLORS.WHITE}
            icon={<FiPlay size={20} className="inline mr-2" />}
          />

          <ButtonRectangular
            bgColor={COLORS.DARK_GREY}
            border={true}
            borderColor={COLORS.WHITE}
            text="Mi Lista"
            textColor={COLORS.WHITE}
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

export default HomeScreen;
