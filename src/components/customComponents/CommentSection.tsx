import { MovieData } from "../../../types/movies";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

interface PropType {
  movie: MovieData;
}
const CommentSection = ({ movie }: PropType) => {
  console.log(movie);

  return (
    <div>
      <CommentForm movie={movie} />
      {/* <Comments /> */}
    </div>
  );
};
export default CommentSection;
