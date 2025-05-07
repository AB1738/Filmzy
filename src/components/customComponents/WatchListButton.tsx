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
  const { user } = useUser();
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
  }, [isWatchListed]);

  const handleClick = () => {
    if (!isWatchListed) {
      const message = addToWatchList(movie);
      //GET TOAST WORKING PROPERLY AND MAKE SURE THE UI IS UPDATING CORRECTLY
      // toast.promise(message);
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
