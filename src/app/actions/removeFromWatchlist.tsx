"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";
import { MovieData } from "../../../types/movies";
import { movieSchema } from "../../../schemas/schemas";

const removeFromWatchList = async (movieData: MovieData) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("You must be signed in to do this");
    if (!movieData) throw new Error("Missing movie data");
    //VALIDATE THE MOVIE DATA
    const validatedMovieData = movieSchema.safeParse(movieData);
    if (!validatedMovieData.success)
      throw new Error("Incorrect movie structure. Validation failed");

    const movie = validatedMovieData.data;
    //CHECK IF THE MOVIE EXISTS IN THE DB
    const movieIsInDb = await prisma.movie.findUnique({
      where: {
        movieId: movie.id,
      },
    });
    if (!movieIsInDb) throw new Error("Movie was not found.");

    // CHECK IF THE USER HAS THE MOVIE WISHLISTED
    const movieIsWishlisted = await prisma.watchList.findFirst({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });
    if (!movieIsWishlisted)
      throw new Error("This movie is not in your wishlist");

    await prisma.watchList.deleteMany({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });

    return {
      success: "Movie has been successfully removed from your wishlist.",
    };
  } catch (e) {
    console.log(e);
    return {
      error: "Could not remove movie from your watchlist",
    };
  }
};

export default removeFromWatchList;
