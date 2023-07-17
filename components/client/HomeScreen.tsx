"use server";

import Image from "next/image";
import { THE_MOVIE_IMAGE_BASE_URL } from "@/common/constants";
import { FiPlay } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { Movie } from "@/types/movie";
import { ButtonRectangular } from "./ui/ButtonRectangular";
import { COLORS } from "@/common/enum";

type HomeScreenProps = {
  movieScreen: Movie;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ movieScreen }) => {
  return (
    <div className="relative w-full h-screen">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-screen h-screen">
        <Image
          src={`${THE_MOVIE_IMAGE_BASE_URL}/t/p/original${movieScreen.backdropPath}`}
          fill
          alt={`Cover image for the movie ${movieScreen.title}`}
          priority={true}
          className="object-cover -z-10 pointer-events-none brightness-75 select-none"
        />
      </div>

      {/*<---CONTENT--->*/}
      {/* MOBILE */}
      <>
      <div className="w-full h-full flex flex-col justify-end items-center lg:hidden">
        <div className="w-full">
          <HomeTitle title={movieScreen.title} />
        </div>

        <div className="w-full h-2/6 bg-gradient-to-t from-dark-grey via-dark-grey/60 to-transparent flex justify-center items-center">
          <div className="h-36 flex flex-col h-tiny:flex-row h-tiny:w-9/12 justify-between items-center">
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
      {/* TABLET - MONITOR NAVBAR */}
      <div className="hidden lg:flex flex-row justify-start items-end w-[calc(83.33%-250px)] relative top-[148px] h-[calc(100%-180px)] max-h-[1500px] mx-auto -translate-x-[125px]">
        <div className="min-w-[300px]">
          <div className="lg:top-1/2 w-full">
            <HomeTitle title={movieScreen.title} />
          </div>

          <div className="w-full h-2/6 bg-gradient-to-t from-dark-grey via-dark-grey/60 to-transparent lg:from-transparent lg:via-transparent flex justify-start items-center">
            <div className="flex flex-row w-[520px] justify-between">
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
      </div>
      </>
      {/*<---END CONTENT--->*/}
    </div>
  );
};



type HomeTitleProps = {
  title: string;
};
const HomeTitle: React.FC<HomeTitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bebas-neue uppercase lg:items-start">
      <div className="font-[400] text-xl lg:text-[20px] text-white tracking-wide mb-1">
        Original de <span className="font-[700]">LITEFLIX</span>
      </div>
      <h2 className="font-[700] text-5xl w-tiny:text-3xl h-tiny:text-3xl lg:text-[120px] text-aqua text-center lg:text-left tracking-wide">
        {title}
      </h2>
    </div>
  );
};

export default HomeScreen;
