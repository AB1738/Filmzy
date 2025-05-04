import getMovieData from "@/lib/getMovieData";
import getMovieVideo from "@/lib/getMovieVideo";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PropType {
  params: Promise<{ movieId: string }>;
}
const MoviePage = async ({ params }: PropType) => {
  const { movieId } = await params;
  const movie = await getMovieData(parseInt(movieId));
  const video = await getMovieVideo(parseInt(movieId));

  console.log(movie);
  console.log(video);

  if (!movie) notFound();
  const getDuration = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const mins = Math.floor(runtime % 60);
    const hourLabel = hours === 1 ? "hour" : "hours";
    const minLabel = mins === 1 ? "minute" : "minutes";

    return `${
      hours > 0 ? (hours && hourLabel ? "hours and" : "hour and") : ""
    } ${mins} ${minLabel ? "minutes" : "minute"}`;
  };

  return (
    <div className="flex flex-col gap-2.5 items-center">
      <h1 className="text-3xl font-bold sm:self-start py-2">{movie.title}</h1>
      <div className="flex flex-col sm:flex-row items-center">
        <a href={movie.homepage} className="flex-1">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={`${movie.title} cover image`}
            height={1000}
            width={1000}
            className="h-[300px] rounded-lg w-full"
          />
        </a>
        <p className="flex-1 font-semibold text-center">{movie.overview}</p>
      </div>

      <p>
        Original Language: <span>{movie.original_language.toUpperCase()}</span>
      </p>
      <p>
        Release Date:{" "}
        <span>{new Date(movie.release_date).toLocaleDateString()}</span>
      </p>
      <p>
        Runtime: <span>{getDuration(movie.runtime)}</span>
      </p>
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl pb-2">Genres</h3>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id} className="py-1">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      {video && video.length > 0 && (
        <iframe
          className="rounded-4xl w-full md:w-[560px]"
          height="315"
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
