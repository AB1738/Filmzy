import LikeButton from "@/components/customComponents/LikeButton";
import WatchListButton from "@/components/customComponents/WatchListButton";
import getMovieData from "@/lib/getMovieData";
import getMovieVideo from "@/lib/getMovieVideo";
import Image from "next/image";
import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import getMovieRecommendations from "@/lib/getMovieRecommendations";
import RecommendedMovies from "@/components/customComponents/RecommendedMovies";
import CommentSection from "@/components/customComponents/CommentSection";

interface PropType {
  params: Promise<{ movieId: string }>;
}

export async function generateMetadata({ params }: PropType) {
  const { movieId } = await params;
  const movie = await getMovieData(parseInt(movieId));

  if (movie) {
    return {
      title: `${movie?.title} – Details, Release Info & More | Filmzy`,
    };
  } else
    return {
      title: `Movie Not Found`,
    };
}

const MoviePage = async ({ params }: PropType) => {
  const { movieId } = await params;
  const movie = await getMovieData(parseInt(movieId));
  const video = await getMovieVideo(parseInt(movieId));
  const recommendedMovies = await getMovieRecommendations(parseInt(movieId));
  console.log(recommendedMovies);

  const user = await currentUser();

  // console.log(movie);
  // console.log(video);

  if (!movie) notFound();
  const getDuration = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const mins = runtime % 60;

    const hourLabel = hours === 1 ? "hour" : "hours";
    const minLabel = mins === 1 ? "minute" : "minutes";

    if (hours > 0 && mins > 0) {
      return `${hours} ${hourLabel} and ${mins} ${minLabel}`;
    } else if (hours > 0) {
      return `${hours} ${hourLabel}`;
    } else {
      return `${mins} ${minLabel}`;
    }
  };

  return (
    <div className="flex flex-col gap-3.5 items-center">
      <h1 className="text-3xl font-bold sm:self-start py-2">{movie.title}</h1>
      <a href={movie.homepage} className="flex-1">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={`${movie.title} cover image`}
          height={1000}
          width={1000}
          className="rounded-lg w-full"
        />
      </a>
      {user && (
        <div className="flex w-full justify-between">
          <WatchListButton movie={movie} /> <LikeButton movie={movie} />
        </div>
      )}

      <p className="flex-1 font-semibold text-center leading-7">
        {movie.overview}
      </p>
      <div className="grid grid-cols-4 lg:items-center w-full my-2 justify-center gap-2">
        <div className="col-span-2 lg:col-span-1 flex flex-col text-center gap-2 flex-1">
          <h3 className="font-bold text-2xl pb-2">Movie Info</h3>

          <p>
            Original Language:{" "}
            <span>{movie.original_language.toUpperCase()}</span>
          </p>
          <p>
            Release Date:{" "}
            <span>{new Date(movie.release_date).toLocaleDateString()}</span>
          </p>
          <p>
            Runtime: <span>{getDuration(movie.runtime)}</span>
          </p>
        </div>
        {video && video.length > 0 && (
          <iframe
            className=" mx-auto col-span-4 lg:col-span-2 rounded-4xl w-full md:w-[560px] aspect-video"
            src={`https://www.youtube.com/embed/${video[0].key}`}
            title={video[0].name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        <div className="col-span-2 col-start-3 row-start-1 lg:col-start-4 lg:col-span-1 flex flex-col items-center text-center flex-1">
          <h3 className="font-bold text-2xl pb-2">Genres</h3>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id} className="py-1">
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Comment section */}
      <div className="w-full">
        <CommentSection movie={movie} />
      </div>
      {recommendedMovies && recommendedMovies.length > 0 && (
        <div className="max-w-full">
          <h3 className="py-3 font-semibold text-xl sm:text-2xl">
            Liked That Movie? Filmzy’s Picks for You!
          </h3>
          <RecommendedMovies movies={recommendedMovies} />
        </div>
      )}
    </div>
  );
};
export default MoviePage;
