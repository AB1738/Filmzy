"use client";
import { ThumbsUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MovieData } from "../../../types/movies";
import addToLikedMovies from "@/app/actions/addToLikedMovies";
import removeFromLikedMovies from "@/app/actions/removeFromLikedMovies";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import getWishlistOrLikeStatus from "@/app/actions/getWishlistOrLikeStatus";

interface ButtonPropType {
  movie: MovieData;
}

const LikeButton = ({ movie }: ButtonPropType) => {
  const [isLiked, setIsLiked] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWatchListStatus = async () => {
      const likedStatus = await getWishlistOrLikeStatus("likedMovie", movie);

      likedStatus && setIsLiked(likedStatus);
      setIsLoading(false);
    };
    fetchWatchListStatus();
  }, [movie]);

  const handleClick = async () => {
    if (!isLiked) {
      toast.promise(addToLikedMovies(movie), {
        loading: "Liking movie...",
        success: (res) => {
          setIsLiked(true);
          return res.success;
        },
        error: (err) => {
          setIsLiked(false);
          return err.message || "Something went wrong";
        },
      });
    } else if (isLiked) {
      toast.promise(removeFromLikedMovies(movie), {
        loading: "Unliking movie...",
        success: (res) => {
          setIsLiked(false);
          return res.success;
        },
        error: (err) => {
          setIsLiked(true);
          return err.message || "Something went wrong";
        },
      });
    }
  };
  return (
    !isLoading && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ThumbsUp
              onClick={handleClick}
              className="cursor-pointer"
              fill={`${isLiked && "#fff"}`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${!isLiked ? "Like Movie" : "Unlike Movie"}`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  );
};
export default LikeButton;
