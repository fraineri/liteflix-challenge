import { getYearFromDate } from "@/common/utils/date.utils";
import PlayButton from "./PlayButton";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { THE_MOVIE_IMAGE_BASE_URL } from "@/common/constants";

type MovieCardProps = {
  movie: any;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="relative w-80 h-44 group/movie mb-5">
      {/* HOVER */}
      <div className="absolute -invisible group-hover/movie:visible top-0 left-1/2 transfrom -translate-x-1/2 z-10 w-full h-full bg-dark-grey bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="relative flex flex-col justify-around top-1/2 h-1/2 w-full pl-4 ">
          {/* TITLE + PLAY */}
          <div className="flex flex-row justify-start items-center w-11/12 text-ellipsis overflow-hidden ">
            <div className="flex flex-row justify-center items-center mr-3 ">
              <PlayButton size="small" hasHoverEffect={true} />
            </div>
            <p className="font-bebas-neue uppercase tracking-widest text-[17px] text-white  overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.original_title}
            </p>
          </div>
          {/* SCORE + YEAR */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-start items-center">
              <AiFillStar className="text-aqua" />
              <span className="ml-2 font-bebas-neue tracking-wide text-[14px] font-[400] text-white">
                {movie.vote_average}
              </span>
            </div>
            <span className="font-bebas-neue tracking-wide text-[17px] font-[400] text-white mr-4">
              {getYearFromDate(movie.release_date)}
            </span>
          </div>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="relative w-full h-full mx-auto mb-5">
        <div className="relative z-[1] w-full h-full bg-gradient-to-t from-dark-grey/90 via-dark-grey/30 to-transparent text-white flex flex-col justify-center items-center group-hover/movie:opacity-0 transition-opacity duration-300">
          <div className="absolute text-center h-2/3 top-1/3">
            <div className="flex flex-col justify-between items-center h-full pb-3">
              <PlayButton size="medium" />
              <h4 className="font-bebas-neue uppercase tracking-widest text-[16px] text-center text-white px-3">
                {movie.original_title}
              </h4>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0">
          <Image
            src={`${THE_MOVIE_IMAGE_BASE_URL}/t/p/original${movie.backdrop_path}`}
            fill
            alt={`Cover image for the movie ${movie.original_title}`}
            priority={true}
            className="object-cover pointer-events-none select-none w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
