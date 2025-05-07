"use server";
import { currentUser } from "@clerk/nextjs/server";
import { MovieData } from "../../../types/movies";
import prisma from "../../../lib/prisma";

const getWishlistOrLikeStatus = async (
  model: "watchList" | "likedMovie",
  movie: MovieData
) => {
  const user = await currentUser();
  if (!user) return;
  try {
    const entryExists = await (prisma[model] as any).findFirst({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });
    console.log("FROM SPECIAL SERVER ACTION");
    if (entryExists) return true;
    else return false;
  } catch (e) {
    console.log(e);
  }
};
export default getWishlistOrLikeStatus;
