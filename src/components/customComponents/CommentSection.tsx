import prisma from "../../../lib/prisma";
import { MovieData } from "../../../types/movies";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

interface PropType {
  movie: MovieData;
}

const CommentSection = async ({ movie }: PropType) => {
  console.log(movie);
  const comments = await prisma.comment.findMany({
    where: {
      movieId: movie.id,
    },
    include: {
      author: true,
    },
  });

  console.log(comments);
  return (
    <div className="bg-[#d2cdd7] text-black">
      <CommentForm movie={movie} />
      {comments && comments.length > 0 ? (
        <Comments comments={comments} />
      ) : (
        <h1>No comments yet. Be the first to leave one</h1>
      )}
    </div>
  );
};
export default CommentSection;
