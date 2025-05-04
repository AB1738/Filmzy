"use server";

import { Genres } from "../../../types/genres";

export const getMovieGenres = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
        },
        cache: "force-cache",
      }
    );
    const data = await response.json();
    const genres: Genres = data.genres;
    return genres;
  } catch (e) {
    console.log(e);
  }
};
