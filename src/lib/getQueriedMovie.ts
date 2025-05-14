import { Movies } from "../../types/movies";

const getQueriedMovie = async (movie: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
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
    console.log(response);
    const data = await response.json();
    console.log(data);
    const movies: Movies = data.results;
    console.log(movies);
    return movies;
  } catch (e) {
    console.log(e);
  }
};

export default getQueriedMovie;
