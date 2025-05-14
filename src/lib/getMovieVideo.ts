import { Videos } from "../../types/video";

const getMovieVideo = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
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
    const videos: Videos = data.results;
    return videos;
  } catch (e) {
    console.log(e);
  }
};
export default getMovieVideo;
