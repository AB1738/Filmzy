"use server";

import { currentUser } from "@clerk/nextjs/server";
import { MovieData } from "../../../types/movies";
import prisma from "../../../lib/prisma";
import { commentSchema, movieSchema } from "../../../schemas/schemas";
import { revalidatePath } from "next/cache";

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

    //CHECK IF USER IS IN DB
    let userExists = await prisma.user.findUnique({
      where: {
        userId: user.id,
      },
    });
    if (!userExists) {
      userExists = await prisma.user.create({
        data: {
          userId: user.id,
          firstName:
            user.firstName || user.emailAddresses[0].emailAddress.split("@")[0],
          // imageUrl:user.imageUrl
        },
      });
    }

    //CHECK IF MOVIE IS IN DB
    let movieIsInDb = await prisma.movie.findUnique({
      where: {
        movieId: movieData.id,
      },
    });
    if (!movieIsInDb) {
      const movie = movieSchema.safeParse(movieData);
      if (!movie.success) {
        throw new Error("Incorrect movie structure. Validation failed");
      }
      movieIsInDb = await prisma.movie.create({
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
    }
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
    revalidatePath(`/movie/${movieData.id}`);

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
