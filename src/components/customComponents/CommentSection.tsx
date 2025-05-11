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
    <div className="  text-black dark:text-white rounded flex flex-col items-center pb-2">
      <CommentForm movie={movie} />
      {comments && comments.length > 0 ? (
        <Comments comments={comments} />
      ) : (
        <h1 className="font-bold text-2xl">
          Be the first to share your thoughts!
        </h1>
      )}
    </div>
  );
};
export default CommentSection;
