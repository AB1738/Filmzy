import LikeButton from "@/components/customComponents/LikeButton";
import WatchListButton from "@/components/customComponents/WatchListButton";
import getMovieData from "@/lib/getMovieData";
import getMovieVideo from "@/lib/getMovieVideo";
import Image from "next/image";
import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

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
  const user = await currentUser();

  console.log(movie);
  console.log(video);

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
          <WatchListButton /> <LikeButton />
        </div>
      )}

      <p className="flex-1 font-semibold text-center leading-7">
        {movie.overview}
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full my-2">
        <div className="flex flex-col text-center gap-2 flex-1">
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
        <div className="flex flex-col items-center text-center flex-1">
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
      {video && video.length > 0 && (
        <iframe
          className="rounded-4xl w-full md:w-[560px] aspect-video"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          title={video[0].name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};
export default MoviePage;
