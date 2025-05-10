"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

const deleteComment = async (commentId: number) => {
  try {
    const user = await currentUser();
    if (!commentId) throw new Error("Missing comment data");
    if (!user) throw new Error("You must be authenticated to do this");

    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });
    if (!comment) throw new Error("Comment does not exist");
    if (comment?.authorId !== user.id)
      throw new Error("You can only delete comments that you have created");
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
    revalidatePath(`/movie/${comment.movieId}`);
    return {
      success: {
        message: "Comment deleted",
      },
    };
  } catch (e) {
    console.log(e);
    return {
      error: {
        message: "Could not delete comment",
      },
    };
  }
};

export default deleteComment;
