"use client";
import { useEffect, useRef } from "react";
import Comment from "./Comment";

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  text: string;
  authorId: string;
  movieId: number;
  author: {
    id: number;
    userId: string;
    firstName: string;
  };
}

interface Comments {
  comments: Comment[];
}
const Comments = ({ comments }: Comments) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [comments]);

  return (
    <div
      className="flex flex-col h-[400px] w-full overflow-y-auto"
      ref={scrollRef}
    >
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
export default Comments;
