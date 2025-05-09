"use client";

import createComment from "@/app/actions/createComment";
import { MovieData } from "../../../types/movies";
import { Button } from "../ui/button";
import { useActionState, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { UserButton, useUser } from "@clerk/nextjs";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { toast } from "sonner";
interface PropType {
  movie: MovieData;
}
const CommentForm = ({ movie }: PropType) => {
  const NewComment = createComment.bind(null, movie);
  const [state, formAction, isPending] = useActionState(NewComment, undefined);
  const user = useUser();
  useEffect(() => {
    if (state && state.success) {
      toast.success("Comment Created! 🎞️");
    }
  }, [state]);

  return user ? (
    <form
      action={formAction}
      className=" w-full flex flex-col gap-2.5 bg-[#d2cdd7] p-2.5 rounded text-black"
    >
      <Label htmlFor="comment" className="self-center">
        Leave a comment
      </Label>
      <div className="flex flex-col items-center sm:flex-row justify-center gap-2 sm:gap-4">
        <div className="relative w-full sm:w-[75%] flex justify-center">
          <Avatar>
            <AvatarImage src={user.user?.imageUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col w-full">
            <Input
              name="comment"
              id="comment"
              placeholder="Share your thoughts about the movie..."
              className={`border-t-0 border-b-black border-r-0 border-l-0 ml-2 sm:ml-4 focus-visible:ring-0 focus-visible:outline-none${
                state?.error ? "border-b-red-500" : ""
              }`}
            />
            {state?.error && (
              <span className="text-xs text-red-500 mx-auto pt-1">
                {state.error.message}
              </span>
            )}
          </div>
        </div>
        <Button
          disabled={isPending}
          className="self-end cursor-pointer transition-all duration-200 mx-auto sm:mx-0"
          size={"sm"}
          variant={"ghost"}
        >
          {isPending ? "Posting comment" : "Post comment"}
        </Button>
      </div>
    </form>
  ) : (
    <h1> Log in to leave a comment</h1>
  );
};
export default CommentForm;
