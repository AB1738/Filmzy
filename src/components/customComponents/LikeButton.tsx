"use client";
import { ThumbsUp } from "lucide-react";
import { MovieData } from "../../../types/movies";

interface ButtonPropType {
  movie: MovieData;
}

const LikeButton = ({ movie }: ButtonPropType) => {
  const handleClick = () => {};
  return <ThumbsUp onClick={handleClick} className="cursor-pointer" />;
};
export default LikeButton;
