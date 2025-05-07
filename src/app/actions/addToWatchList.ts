"use server";

import { MovieData } from "../../../types/movies";
import addToWishOrLikeList from "@/data-access-layer/addToWishOrLikeList";

const addToWatchList = async (movieData: MovieData) => {
  console.log("using data access layer");
  const response = await addToWishOrLikeList("watchList", movieData);
  return response;
};

export default addToWatchList;
