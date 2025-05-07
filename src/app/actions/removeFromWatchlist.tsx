"use server";

import { MovieData } from "../../../types/movies";
import removeFromWishOrLikeList from "@/data-access-layer/removeFromWishOrLikeList";

const removeFromWatchList = async (movieData: MovieData) => {
  console.log("using data access layer");
  const response = await removeFromWishOrLikeList("watchList", movieData);
  return response;
};

export default removeFromWatchList;
