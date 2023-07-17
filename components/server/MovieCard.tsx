import { getYearFromDate } from "@/common/utils/date.utils";
import PlayButton from "./PlayButton";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import { THE_MOVIE_IMAGE_BASE_URL } from "@/common/constants";
import { Movie, MovieExternal } from "@/types/movie";

type MovieCardProps = {
  movie: Movie | MovieExternal;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const isExternalMovie = ((
    movie: Movie | MovieExternal
  ): movie is MovieExternal => {
    return (movie as MovieExternal).popularity !== undefined;
  })(movie);

  const backdropPath = isExternalMovie
    ? `${THE_MOVIE_IMAGE_BASE_URL}/t/p/original${movie.backdropPath}`
    : movie.backdropPath;

  return (
    <div className="relative w-80 lg:w-[220px] h-44 lg:h-[145px] group/movie mb-5">
      {/* HOVER */}
      <div className="absolute -invisible group-hover/movie:visible top-0 left-1/2 transfrom -translate-x-1/2 z-10 w-full h-full bg-dark-grey bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="relative flex flex-col justify-around top-1/2 h-1/2 w-full pl-4 ">
          {/* TITLE + PLAY */}
          <div className="flex flex-row justify-start items-center w-11/12 text-ellipsis overflow-hidden ">
            <div className="flex flex-row justify-center items-center mr-3 ">
              <PlayButton size="small" hasHoverEffect={true} />
            </div>
            <p className="font-bebas-neue uppercase tracking-widest text-[17px] text-white  overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.title}
            </p>
          </div>
          {/* SCORE + YEAR */}
          <div
            className={`flex flex-row ${
              isExternalMovie ? "justify-between" : "justify-end"
            }`}
          >
            {isExternalMovie && (
              <div className="flex flex-row justify-start items-center">
                <AiFillStar className="text-aqua" />
                <span className="ml-2 font-bebas-neue tracking-wide text-[14px] font-[400] text-white">
                  {movie.voteAverage}
                </span>
              </div>
            )}
            <span className="font-bebas-neue tracking-wide text-[17px] font-[400] text-white mr-4">
              {getYearFromDate(movie.releaseDate)}
            </span>
          </div>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="w-full h-full mx-auto mb-5">
        <div className="relative z-[1] w-full h-full bg-gradient-to-t from-dark-grey/90 via-dark-grey/30 to-transparent text-white flex flex-col justify-center items-center group-hover/movie:opacity-0 transition-opacity duration-300">
          <div className="absolute text-center h-2/3 top-1/3">
            <div className="flex flex-col justify-between items-center h-full pb-3">
              <PlayButton size="medium" />
              <h4 className="font-bebas-neue uppercase tracking-widest text-[16px] text-center text-white px-3">
                {movie.title}
              </h4>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0">
          <Image
            src={backdropPath}
            fill
            alt={`Cover image for the movie ${movie.title}`}
            priority={true}
            className="object-cover pointer-events-none select-none w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
