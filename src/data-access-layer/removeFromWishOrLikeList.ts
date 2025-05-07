import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../lib/prisma";
import { movieSchema } from "../../schemas/schemas";
import { MovieData } from "../../types/movies";

const removeFromWishOrLikeList = async (
  model: "watchList" | "likedMovie",
  movieData: MovieData
) => {
  try {
    const user = await currentUser();
    console.log("DEBUG STEP 1 BELOW");
    console.log(model);
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

    // CHECK IF THE USER HAS THE MOVIE WISHLISTED/LIKED
    const entryExists = await (prisma[model] as any).findFirst({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });
    if (!entryExists)
      throw new Error(
        `${
          model === "watchList"
            ? "This movie is not in your wishlist"
            : "You have not liked this movie"
        }`
      );

    await (prisma[model] as any).deleteMany({
      where: {
        userId: user.id,
        movieId: movie.id,
      },
    });

    return {
      success: `${
        model === "watchList"
          ? "Movie has been successfully removed from your wishlist."
          : "You have successfully unliked this movie"
      }`,
    };
  } catch (e) {
    console.log(e);
    return {
      error: `${
        model === "watchList"
          ? "Could not remove movie from your watchlist"
          : "Could not unlike this movie"
      }`,
    };
  }
};

export default removeFromWishOrLikeList;
