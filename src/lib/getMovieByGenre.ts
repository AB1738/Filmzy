import { Movies } from "../../types/movies";

const getMovieByGenre = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`,
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

export default getMovieByGenre;
