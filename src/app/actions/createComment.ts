"use server";

import { currentUser } from "@clerk/nextjs/server";
import { MovieData } from "../../../types/movies";

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
    // return { message: "Form submitted" };
  } catch (e) {
    console.log(e);
  }
};

export default createComment;
