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

interface ButtonPropType {
  movie: MovieData;
}

const WatchListButton = ({ movie }: ButtonPropType) => {
  const handleClick = () => {
    addToWatchList(movie);
  };

  return <Bookmark onClick={handleClick} className="cursor-pointer" />;
};
export default WatchListButton;

{
  /* <TooltipProvider>
  <Tooltip>
    <TooltipTrigger><Bookmark onClick={handleClick} /></TooltipTrigger>
    <TooltipContent>
      <p>Add to WatchList</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider> */
}
