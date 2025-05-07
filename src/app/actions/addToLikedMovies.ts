"use server";

import { MovieData } from "../../../types/movies";
import addToWishOrLikeList from "@/data-access-layer/addToWishOrLikeList";

const addToLikedMovies = async (movieData: MovieData) => {
  const response = await addToWishOrLikeList("likedMovie", movieData);
  return response;
};
export default addToLikedMovies;
