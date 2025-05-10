"use client";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Comment as CommentType } from "./Comments";
import { EllipsisVertical } from "lucide-react";

import { useUser } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import deleteComment from "@/app/actions/deleteComment";

interface PropType {
  comment: CommentType;
}
const Comment = ({ comment }: PropType) => {
  const { user } = useUser();

  const handleClick = async () => {
    //delete action then toast noti
    toast.promise(deleteComment(comment.id), {
      loading: "Deleting comment...",
      success: (res) => {
        return res.success?.message;
      },
      error: (err) => {
        return err.message || "Something went wrong";
      },
    });
  };
  return (
    <div className="flex gap-1 items-center px-4 py-2 w-full sm:w-[75%] mx-auto relative my-3 bg-white rounded-lg">
      <Avatar>
        <AvatarImage src={"/img/usericon.png"} />
        <AvatarFallback>
          <Image src={"/img/usericon.png"} height={1000} width={1000} alt="" />
        </AvatarFallback>
      </Avatar>

      <p>{comment.author.firstName} </p>
      <p>{comment.text} </p>
      <p>{new Date(comment.createdAt).toLocaleDateString()}</p>
      {user && user.id === comment.authorId && (
        <div className="absolute right-10">
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <EllipsisVertical size={16} />
            </PopoverTrigger>
            <PopoverContent className="cursor-pointer hover:scale-101">
              <p onClick={handleClick}>Delete Comment</p>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};
export default Comment;
