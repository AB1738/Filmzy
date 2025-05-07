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

interface ButtonPropType {
  movie: MovieData;
}

const WatchListButton = ({ movie }: ButtonPropType) => {
  const [isWatchListed, setIsWatchListed] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWatchListStatus = async () => {
      const watchListStatus = await getWatchlistStatus(movie);

      watchListStatus && setIsWatchListed(watchListStatus);
      setIsLoading(false);
      console.log("WATCH LIST STATUS BELOW");
      console.log(watchListStatus);
    };
    fetchWatchListStatus();
  }, []);

  const handleClick = async () => {
    if (!isWatchListed) {
      //GET TOAST WORKING PROPERLY AND MAKE SURE THE UI IS UPDATING CORRECTLY
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
