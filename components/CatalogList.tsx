import { Movie } from "@/types/movie";
import MovieCard from "./server/MovieCard";

type CatalogListProps = {
  status: string;
  movies: Movie[];
};

const CatalogList: React.FC<CatalogListProps> = ({status, movies}) => {

  // TODO: Add loading and error states?

  return (
    <div className="flex flex-col items-center w-full">
      {status === "success" &&
        movies.map((movie: Movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default CatalogList;
