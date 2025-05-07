"use server";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";
import { MovieData } from "../../../types/movies";
import { movieSchema } from "../../../schemas/schemas";

const addToWatchList = async (movieData: MovieData) => {
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
        //CHECK IF USER HAS ALREADY WATCHLISTED THE MOVIE
        const watchListExists = await prisma.watchList.findFirst({
          where: {
            userId: user.id,
            movieId: movieData.id,
          },
        });

        //IF WATCHLIST EXISTS, THEN THE USER ALREADY WATCHLISTED THE MOVIE
        if (watchListExists) {
          throw new Error(
            "You have already added this movie to your watchlist"
          );
        }
        //IF WATCHLIST DOESNT EXIST, CREATE IT
        const watchListedMovie = await prisma.watchList.create({
          data: {
            userId: user.id,
            movieId: movieData.id,
          },
        });
        return {
          success: "Movie added to your watchlist 🍿",
        };
      }
      const newUser = await prisma.user.create({
        data: {
          userId: user.id,
          firstName: user.firstName || "",
        },
      });
      //AFTER CREATING A NEW ACCOUNT FOR THE USER ADD THE MOVIE TO THEIR WATCHLIST
      //CHECK IF USER HAS ALREADY WATCHLISTED THE MOVIE
      const watchListExists = await prisma.watchList.findFirst({
        where: {
          userId: user.id,
          movieId: movieData.id,
        },
      });

      //IF WATCHLIST EXISTS, THEN THE USER ALREADY WATCHLISTED THE MOVIE
      if (watchListExists) {
        throw new Error("You have already added this movie to your watchlist");
      }
      //IF WATCHLIST DOESNT EXIST, CREATE IT
      const watchListedMovie = await prisma.watchList.create({
        data: {
          userId: user.id,
          movieId: movieData.id,
        },
      });
      return {
        success: "Movie added to your watchlist 🍿",
      };
    }

    //IF MOVIE WASNT FOUND THEN THE DATA NEEDS TO BE VALIDATED
    const movie = movieSchema.safeParse(movieData);

    if (!movie.success) {
      throw new Error("Incorrect movie structure. Validation failed");
    }
    // console.log("Movie passed validation", movie);

    //ADD MOVIE TO THE DATABASE
    const newMovie = await prisma.movie.create({
      data: {
        movieId: movie.data.id,
        title: movie.data.title,
        backdrop_path: movie.data.backdrop_path,
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
      //CHECK IF USER HAS ALREADY WATCHLISTED THE MOVIE
      const watchListExists = await prisma.watchList.findFirst({
        where: {
          userId: user.id,
          movieId: movieData.id,
        },
      });

      //IF WATCHLIST EXISTS, THEN THE USER ALREADY WATCHLISTED THE MOVIE
      if (watchListExists) {
        throw new Error("You have already added this movie to your watchlist");
      }
      //IF WATCHLIST DOESNT EXIST, CREATE IT
      const watchListedMovie = await prisma.watchList.create({
        data: {
          userId: user.id,
          movieId: movieData.id,
        },
      });
      return {
        success: "Movie added to your watchlist 🍿",
      };
    }
    const newUser = await prisma.user.create({
      data: {
        userId: user.id,
        firstName: user.firstName || "",
      },
    });
    //AFTER CREATING A NEW ACCOUNT FOR THE USER ADD THE MOVIE TO THEIR WATCHLIST
    //CHECK IF USER HAS ALREADY WATCHLISTED THE MOVIE
    const watchListExists = await prisma.watchList.findFirst({
      where: {
        userId: user.id,
        movieId: movieData.id,
      },
    });

    //IF WATCHLIST EXISTS, THEN THE USER ALREADY WATCHLISTED THE MOVIE
    if (watchListExists) {
      throw new Error("You have already added this movie to your watchlist");
    }
    //IF WATCHLIST DOESNT EXIST, CREATE IT
    const watchListedMovie = await prisma.watchList.create({
      data: {
        userId: user.id,
        movieId: movieData.id,
      },
    });
    console.log(newUser);
    console.log(newMovie);
    console.log(watchListedMovie);
    return {
      success: "Movie added to your watchlist 🍿",
    };
  } catch (e) {
    console.log(e);
    return {
      error: "Could not add to your watchlist",
    };
  }
};

export default addToWatchList;
