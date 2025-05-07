"use client";
import { Bookmark } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MovieData } from "../../../types/movies";
import addToWatchList from "@/app/actions/addToWatchList";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import getWatchlistStatus from "@/app/actions/getWatchlistStatus";
import { toast } from "sonner";
import removeFromWatchList from "@/app/actions/removeFromWatchlist";
import getWishlistOrLikeStatus from "@/app/actions/getWishlistOrLikeStatus";

interface ButtonPropType {
  movie: MovieData;
}

const WatchListButton = ({ movie }: ButtonPropType) => {
  const [isWatchListed, setIsWatchListed] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWatchListStatus = async () => {
      const watchListStatus = await getWishlistOrLikeStatus("watchList", movie);

      watchListStatus && setIsWatchListed(watchListStatus);
      setIsLoading(false);
      console.log("WATCH LIST STATUS BELOW");
      console.log(watchListStatus);
    };
    fetchWatchListStatus();
  }, []);

  const handleClick = async () => {
    if (!isWatchListed) {
      toast.promise(addToWatchList(movie), {
        loading: "Adding movie to your watchlist...",
        success: (res) => {
          setIsWatchListed(true);
          return res.success;
        },
        error: (err) => {
          setIsWatchListed(false);
          return err.message || "Something went wrong";
        },
      });
    } else if (isWatchListed) {
      console.log("already watchlisted this");
      //removeFromWatchList server action
      toast.promise(removeFromWatchList(movie), {
        loading: "Removing movie from your watchlist...",
        success: (res) => {
          setIsWatchListed(false);
          return res.success;
        },
        error: (err) => {
          setIsWatchListed(true);
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
            <Bookmark
              onClick={handleClick}
              className="cursor-pointer"
              fill={`${isWatchListed && "#fff"}`}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${
              !isWatchListed ? "Add To WatchList" : "Remove From Watchlist"
            }`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  );
};
export default WatchListButton;
