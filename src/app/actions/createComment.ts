"use server";

import { currentUser } from "@clerk/nextjs/server";
import { MovieData } from "../../../types/movies";
import prisma from "../../../lib/prisma";
import { commentSchema, movieSchema } from "../../../schemas/schemas";

const createComment = async (
  movieData: MovieData,
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser();
    if (!user) throw new Error("You must be signed in to do this");
    const commentText = formData.get("comment") as string;
    if (!movieData) throw new Error("Missing movie data");
    if (!commentText)
      return {
        error: {
          message: "This field is required",
        },
      };
    console.log(user.id);
    console.log(commentText);
    console.log(movieData);

    //CHECK IF MOVIE IS IN DB
    const movieIsInDb = await prisma.movie.findUnique({
      where: {
        movieId: movieData.id,
      },
    });

    //IF IS IN DB
    if (movieIsInDb) {
      //CHECK IS USER HAS AN ACCOUNT
      const userExists = await prisma.user.findUnique({
        where: {
          userId: user.id,
        },
      });

      //IF USER HAS ACCOUNT
      if (userExists) {
        const comment = {
          text: commentText,
          movieId: movieData.id,
          author: userExists,
          authorId: userExists.userId,
        };
        //make sure comment has valid structure
        const validatedComment = commentSchema.safeParse(comment);
        if (!validatedComment.success) {
          const errorMessage =
            validatedComment.error.flatten().fieldErrors.text?.[0];
          throw new Error(errorMessage || "Invalid comment");
        }

        await prisma.comment.create({
          data: {
            text: commentText,
            movieId: movieData.id,
            authorId: userExists.userId,
          },
        });
        return {
          success: {
            message: "Comment created",
          },
        };
      }

      //IF USER DOES NOT HAVE ACCOUNT CREATE A NEW ACCOUNT FOR THEM
      const newUser = await prisma.user.create({
        data: {
          userId: user.id,
          firstName:
            user.firstName || user.emailAddresses[0].emailAddress.split("@")[0],
          // imageUrl:user.imageUrl
        },
      });
      const comment = {
        text: commentText,
        movieId: movieData.id,
        author: newUser,
        authorId: newUser.userId,
      };
      //make sure comment has valid structure
      const validatedComment = commentSchema.safeParse(comment);
      if (!validatedComment.success) {
        const errorMessage =
          validatedComment.error.flatten().fieldErrors.text?.[0];
        throw new Error(errorMessage || "Invalid comment");
      }

      await prisma.comment.create({
        data: {
          text: commentText,
          movieId: movieData.id,
          authorId: newUser.userId,
        },
      });
      return {
        success: {
          message: "Comment created",
        },
      };
    }

    //IF IS NOT IN DB
    //IF MOVIE WASNT FOUND THEN THE DATA NEEDS TO BE VALIDATED
    const movie = movieSchema.safeParse(movieData);
    if (!movie.success) {
      throw new Error("Incorrect movie structure. Validation failed");
    }

    //ADD MOVIE TO THE DATABASE
    const newMovie = await prisma.movie.create({
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
    const userExists = await prisma.user.findUnique({
      where: {
        userId: user.id,
      },
    });

    //IF USER HAS ACCOUNT
    if (userExists) {
      const comment = {
        text: commentText,
        movieId: newMovie.id,
        author: userExists,
        authorId: userExists.userId,
      };
      //make sure comment has valid structure
      const validatedComment = commentSchema.safeParse(comment);
      if (!validatedComment.success) {
        const errorMessage =
          validatedComment.error.flatten().fieldErrors.text?.[0];
        throw new Error(errorMessage || "Invalid comment");
      }

      await prisma.comment.create({
        data: {
          text: commentText,
          movieId: newMovie.id,
          authorId: userExists.userId,
        },
      });
      return {
        success: {
          message: "Comment created",
        },
      };
    }

    //IF USER DOES NOT HAVE ACCOUNT CREATE A NEW ACCOUNT FOR THEM
    const newUser = await prisma.user.create({
      data: {
        userId: user.id,
        firstName:
          user.firstName || user.emailAddresses[0].emailAddress.split("@")[0],
        // imageUrl:user.imageUrl
      },
    });
    const comment = {
      text: commentText,
      movieId: newMovie.id,
      author: newUser,
      authorId: newUser.userId,
    };
    //make sure comment has valid structure
    const validatedComment = commentSchema.safeParse(comment);
    if (!validatedComment.success) {
      const errorMessage =
        validatedComment.error.flatten().fieldErrors.text?.[0];
      throw new Error(errorMessage || "Invalid comment");
    }

    await prisma.comment.create({
      data: {
        text: commentText,
        movieId: newMovie.id,
        authorId: newUser.userId,
      },
    });
    return {
      success: {
        message: "Comment created",
      },
    };
  } catch (e: any) {
    console.log(e);
    return {
      error: {
        message: e.message,
      },
    };
  }
};

export default createComment;
