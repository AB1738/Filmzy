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
  return (
    <div className="flex flex-col">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
export default Comments;
