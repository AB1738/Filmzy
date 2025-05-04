import MovieCarousel from "@/components/customComponents/MovieCarousel";
import getCurrentlyPlayingMovies from "@/lib/getCurrentlyPlayingMovies";
import getMovieGenres from "@/lib/getMovieGenres";
import getMovieVideo from "@/lib/getMovieVideo";
import getPopularMovies from "@/lib/getPopularMovies";
import getTopRatedMovies from "@/lib/getTopRatedMovies";
import getUpcomingMovies from "@/lib/getUpcomingMovies";
import Image from "next/image";

export default async function Home() {
  // const movies = await getMovieVideo(297762);
  const movies = await getCurrentlyPlayingMovies();
  console.log(movies);

  return (
    <section>
      {movies && <MovieCarousel movies={movies} />}
      {/* {movies &&
        movies.map((movie) => (
          <h1>
            {movie.name}{" "}
            <iframe
              className="rounded-4xl"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movie.key}`}
              title={movie.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </h1>
        ))} */}
    </section>
  );
}

// https://image.tmdb.org/t/p/w500
// https://image.tmdb.org/t/p/original
