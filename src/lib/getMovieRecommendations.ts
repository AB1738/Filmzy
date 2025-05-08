import { Movies } from "../../types/movies";

const getMovieRecommendations = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60 * 60 * 24 * 7 * 30,
        },
      }
    );
    const data = await response.json();
    const movies: Movies = data.results;
    return movies;
  } catch (e) {
    console.log(e);
  }
};

export default getMovieRecommendations;
