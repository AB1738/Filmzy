import Image from "next/image";
import { Movies } from "../../../types/movies";
import Link from "next/link";

interface MovieListProps {
  movies: Movies;
}
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="flex flex-col gap-5 sm:gap-2 items-center">
      {movies.map(
        (movie) =>
          movie.backdrop_path && (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              className="relative rounded flex flex-col sm:flex-row justify-center items-center  gap-3 w-full border-gray-400 hover:scale-101 transition-transform duration-600"
            >
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={`Cover image for ${movie.title}`}
                height={1000}
                width={1000}
                priority
                className="rounded-lg w-full sm:w-100 aspect-video flex-1"
              />
              <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 absolute sm:static bottom-5">
                <h3 className="text-base sm:text-xl font-semibold line">
                  {movie.title}
                </h3>
                <p className="line-clamp-2 text-gray-300 text-xs sm:text-base">
                  {movie.overview}
                </p>
              </div>
              <div className="bg-black/20 h-full w-full absolute sm:hidden"></div>
            </Link>
          )
      )}
    </div>
  );
};
export default MovieList;
