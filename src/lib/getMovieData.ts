import { MovieData } from "../../types/movies";

const getMovieData = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        },
        cache: "force-cache",
      }
    );
    const movie: MovieData = await response.json();
    return movie;
  } catch (e) {
    console.log(e);
  }
};

export default getMovieData;
