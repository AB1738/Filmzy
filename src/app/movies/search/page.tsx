import MovieList from "@/components/customComponents/MovieList";
import getQueriedMovie from "@/lib/getQueriedMovie";
import { Suspense } from "react";
import MoviesLoading from "../loading";
// import { getQueriedMovie } from "@/app/actions/getQueriedMovie";

interface MovieSearchProps {
  searchParams: Promise<{ query: string }>;
}

const MovieSearchPage = async ({ searchParams }: MovieSearchProps) => {
  const { query } = await searchParams;
  const movies = await getQueriedMovie(query);
  if (!movies || movies.length < 1)
    return (
      <h1 className="text-5xl font-bold my-4 text-center sm:text-left">
        No results
      </h1>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold my-4 text-center sm:text-left">
        Results for {query}
      </h1>
      <Suspense fallback={<MoviesLoading />}>
        <MovieList movies={movies} />
      </Suspense>{" "}
    </div>
  );
};
export default MovieSearchPage;
