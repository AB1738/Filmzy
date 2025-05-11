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
    <div className="flex gap-1.5 items-center  w-full sm:w-[75%] mx-auto relative my-1">
      <div className="flex flex-col items-center self-start">
        <Avatar>
          <AvatarImage src={"/img/usericon.png"} className="bg-white" />
          <AvatarFallback>
            <Image
              src={"/img/usericon.png"}
              height={1000}
              width={1000}
              alt=""
              className="bg-white"
            />
          </AvatarFallback>
        </Avatar>
        <p className="text-sm font-semibold text-center">
          {comment.author.firstName}{" "}
        </p>
      </div>
      <div className="rounded-md  rounded-tl-none shadow-md flex flex-col-reverse justify-center sm:flex-row sm:justify-between relative flex-1 px-4 py-2  self-start">
        <p className="">{comment.text} </p>
        <div className="flex items-center h-full self-end">
          <p className="text-xs self-center">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
          {user && user.id === comment.authorId && (
            <div className="self-end">
              <Popover>
                <PopoverTrigger className="cursor-pointer self-end">
                  <EllipsisVertical size={14} />
                </PopoverTrigger>
                <PopoverContent className="cursor-pointer hover:scale-101">
                  <p onClick={handleClick}>Delete Comment</p>
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Comment;
