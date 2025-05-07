"use server";

import removeFromWishOrLikeList from "@/data-access-layer/removeFromWishOrLikeList";
import { MovieData } from "../../../types/movies";

const removeFromLikedMovies = async (movieData: MovieData) => {
  const response = await removeFromWishOrLikeList("likedMovie", movieData);
  return response;
};
export default removeFromLikedMovies;
