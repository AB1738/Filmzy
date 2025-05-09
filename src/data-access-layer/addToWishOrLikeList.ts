import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../lib/prisma";
import { MovieData } from "../../types/movies";
import { movieSchema } from "../../schemas/schemas";

const addToWishOrLikeList = async (
  model: "watchList" | "likedMovie",
  movieData: MovieData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("You must be signed in to do this");
    if (!movieData) throw new Error("Missing movie data");

    //CHECKING IF THE MOVIE ALREADY EXISTS IN THE DATABASE
    const movieIsInDb = await prisma.movie.findUnique({
      where: {
        movieId: movieData.id,
      },
    });
    //IF THE MOVIE IS ALREADY IN DB, THEN IT HAS ALREADY PASSED VALIDATION BEFORE
    if (movieIsInDb) {
      //CHECK IF USER ALREADY EXISTS IN DB
      const userIsInDb = await prisma.user.findUnique({
        where: {
          userId: user.id,
        },
      });
      //IF USER IS IN DB, THEN A NEW ACCOUNT DOESNT NEED TO BE CREATED
      if (userIsInDb) {
        //CHECK IF USER HAS ALREADY WATCHLISTED/LIKED THE MOVIE
        const entryExists = await (prisma[model] as any).findFirst({
          where: {
            userId: user.id,
            movieId: movieData.id,
          },
        });

        //IF entryExists EXISTS, THEN THE USER ALREADY WATCHLISTED/LIKED THE MOVIE
        if (entryExists) {
          throw new Error(
            `${
              model === "watchList"
                ? "You have already added this movie to your watchlist"
                : "You have already liked this movie"
            }`
          );
        }
        //IF WATCHLIST/LIKEDMOVIE DOESNT EXIST, CREATE IT
        await (prisma[model] as any).create({
          data: {
            userId: user.id,
            movieId: movieData.id,
          },
        });
        return {
          success: `${
            model === "watchList"
              ? "Movie added to your watchlist 🍿"
              : "Successfully liked movie🎬"
          }`,
        };
      }
      //USER DIDNT EXIST IN DB, SO THEY NEED TO BE ENTERED
      await prisma.user.create({
        data: {
          userId: user.id,
          firstName:
            user.firstName || user.emailAddresses[0].emailAddress.split("@")[0],
          // imageUrl: user.imageUrl,
        },
      });

      //AFTER CREATING A NEW ACCOUNT FOR THE USER ADD THE MOVIE TO THEIR WATCHLIST
      //CHECK IF USER HAS ALREADY WATCHLISTED/LIKED THE MOVIE
      const entryExists = await (prisma[model] as any).findFirst({
        where: {
          userId: user.id,
          movieId: movieData.id,
        },
      });

      //IF WATCHLIST/LIKEDMOVIE EXISTS, THEN THE USER ALREADY WATCHLISTED/LIKED THE MOVIE
      if (entryExists) {
        throw new Error(
          `${
            model === "watchList"
              ? "You have already added this movie to your watchlist"
              : "You have already liked this movie"
          }`
        );
      }
      //IF WATCHLIST/LIKEDMOVIE DOESNT EXIST, CREATE IT
      await (prisma[model] as any).create({
        data: {
          userId: user.id,
          movieId: movieData.id,
        },
      });
      return {
        success: `${
          model === "watchList"
            ? "Movie added to your watchlist 🍿"
            : "Successfully liked movie🎬"
        }`,
      };
    }

    //IF MOVIE WASNT FOUND THEN THE DATA NEEDS TO BE VALIDATED
    const movie = movieSchema.safeParse(movieData);
    console.log("FROM DATA ACCESS LAYER");
    console.log(movie);

    if (!movie.success) {
      throw new Error("Incorrect movie structure. Validation failed");
    }

    //ADD MOVIE TO THE DATABASE
    await prisma.movie.create({
      data: {
        movieId: movie.data.id,
        title: movie.data.title,
        backdrop_path: movie.data.backdrop_path,
        // genres: movie.data.genres.map((genre) => genre.name),
        overview: movie.data.overview,
        release_date: movie.data.release_date,
        comments: undefined,
        likes: undefined,
        watchlists: undefined,
      },
    });

    //CHECK IF USER ALREADY EXISTS IN DB
    const userIsInDb = await prisma.user.findUnique({
      where: {
        userId: user.id,
      },
    });
    //IF USER IS IN DB, THEN A NEW ACCOUNT DOESNT NEED TO BE CREATED
    if (userIsInDb) {
      //CHECK IF USER HAS ALREADY WATCHLISTED/LIKED THE MOVIE
      const entryExists = await (prisma[model] as any).findFirst({
        where: {
          userId: user.id,
          movieId: movieData.id,
        },
      });

      //IF WATCHLIST/LIKEDMOVIE EXISTS, THEN THE USER ALREADY WATCHLISTED/LIKED THE MOVIE
      if (entryExists) {
        throw new Error(
          `${
            model === "watchList"
              ? "You have already added this movie to your watchlist"
              : "You have already liked this movie"
          }`
        );
      }
      //IF WATCHLIST/LIKEDMOVIE DOESNT EXIST, CREATE IT
      await (prisma[model] as any).create({
        data: {
          userId: user.id,
          movieId: movieData.id,
        },
      });
      return {
        success: `${
          model === "watchList"
            ? "Movie added to your watchlist 🍿"
            : "Successfully liked movie🎬"
        }`,
      };
    }
    //IF USER DOESNT EXIST THEN THEY NEED TO BE ADDED TO DB
    await prisma.user.create({
      data: {
        userId: user.id,
        firstName:
          user.firstName || user.emailAddresses[0].emailAddress.split("@")[0],
        // imageUrl: user.imageUrl,
      },
    });
    //AFTER CREATING A NEW ACCOUNT FOR THE USER ADD THE MOVIE TO THEIR WATCHLIST
    //CHECK IF USER HAS ALREADY WATCHLISTED/LIKED THE MOVIE
    const entryExists = await (prisma[model] as any).findFirst({
      where: {
        userId: user.id,
        movieId: movieData.id,
      },
    });

    //IF WATCHLIST/LIKEDMOVIE EXISTS, THEN THE USER ALREADY WATCHLISTED/LIKED THE MOVIE
    if (entryExists) {
      throw new Error(
        `${
          model === "watchList"
            ? "You have already added this movie to your watchlist"
            : "You have already liked this movie"
        }`
      );
    }
    //IF WATCHLIST/LIKEDMOVIE DOESNT EXIST, CREATE IT
    await (prisma[model] as any).create({
      data: {
        userId: user.id,
        movieId: movieData.id,
      },
    });

    return {
      success: `${
        model === "watchList"
          ? "Movie added to your watchlist 🍿"
          : "Successfully liked movie🎬"
      }`,
    };
  } catch (e) {
    console.log(e);
    return {
      error: `${
        model === "watchList"
          ? "Could not add to your watchlist"
          : "Could not like this movie"
      }`,
    };
  }
};

export default addToWishOrLikeList;
