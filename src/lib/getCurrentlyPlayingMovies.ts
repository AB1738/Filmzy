import { Movies } from "../../types/movies";

const getCurrentlyPlayingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60 * 60 * 24 * 7,
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
export default getCurrentlyPlayingMovies;
