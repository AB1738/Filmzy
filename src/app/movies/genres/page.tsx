import MovieList from "@/components/customComponents/MovieList";
import getMovieByGenre from "@/lib/getMovieByGenre";
import { Suspense } from "react";
import MoviesLoading from "../loading";

interface GenreSearchProps {
  searchParams: Promise<{ genre: string }>;
}

const GenrePage = async ({ searchParams }: GenreSearchProps) => {
  const { genre } = await searchParams;
  const id = genre.split("/")[1];
  const genreName = genre.split("/")[0];
  console.log(id);
  const movies = await getMovieByGenre(parseInt(id));
  if (!movies)
    return (
      <h1 className="text-5xl font-bold my-4 text-center sm:text-left">
        No results
      </h1>
    );
  return (
    <div>
      <h1 className="text-3xl font-bold my-4 text-center sm:text-left">
        Results for {genreName}
      </h1>
      <Suspense fallback={<MoviesLoading />}>
        <MovieList movies={movies} />
      </Suspense>
    </div>
  );
};
export default GenrePage;
