"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";
import { MovieData } from "../../../types/movies";
import { UserResource } from "@clerk/types";

const getWatchlistStatus = async (movie: MovieData) => {
  const user = await currentUser();
  if (!user) return;
  try {
    const watchListExists = await prisma.watchList.findFirst({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });
    console.log("FROM SPECIAL SERVER ACTION");
    if (watchListExists) return true;
    else return false;
  } catch (e) {
    console.log(e);
  }
};

export default getWatchlistStatus;
