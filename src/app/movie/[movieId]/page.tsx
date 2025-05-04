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
  if (!movie) notFound();
  const getDuration = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const mins = Math.floor(runtime % 60);
    const hourLabel = hours === 1 ? "hour" : "hours";
    const minLabel = mins === 1 ? "minute" : "minutes";

    return `${hours} ${hourLabel ? "hours" : "hour"} and ${mins} ${
      minLabel ? "minutes" : "minute"
    }`;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <a href={movie.homepage}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={`${movie.title} cover image`}
          height={80}
          width={80}
        />
      </a>
      <p>{movie.overview}</p>
      <p>
        Original Language: <span>{movie.original_language.toUpperCase()}</span>
      </p>
      <p>
        Release Date: <span>{movie.release_date}</span>
      </p>
      <p>
        Runtime: <span>{getDuration(movie.runtime)}</span>
      </p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      {video && (
        <iframe
          className="rounded-4xl"
          width="560"
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
