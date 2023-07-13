import { Movie } from "@/types/movie";
import MovieCard from "./server/MovieCard";

type CatalogListProps = {
  movies: Movie[];
};

const CatalogList: React.FC<CatalogListProps> = ({ movies }) => {
  return (
    <div className="flex flex-col items-center w-full">
      {movies.map((movie: Movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default CatalogList;
