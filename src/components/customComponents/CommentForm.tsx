"use client";

import createComment from "@/app/actions/createComment";
import { MovieData } from "../../../types/movies";
import { Button } from "../ui/button";
import { useActionState } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { UserButton, useUser } from "@clerk/nextjs";
interface PropType {
  movie: MovieData;
}
const CommentForm = ({ movie }: PropType) => {
  const NewComment = createComment.bind(null, movie);
  const [state, formAction, isPending] = useActionState(NewComment, undefined);
  const user = useUser();

  user.user?.imageUrl;

  return (
    <form action={formAction}>
      <Label htmlFor="comment">Leave a comment</Label>
      {/* <UserButton /> */}
      <Textarea
        name="comment"
        id="comment"
        placeholder="Type your comment here..."
      />
      {state?.error && (
        <p className="text-xs text-red-500">{state.error.message}</p>
      )}
      <Button disabled={isPending}>
        {isPending ? "Creating comment" : "Create comment"}
      </Button>
    </form>
  );
};
export default CommentForm;
