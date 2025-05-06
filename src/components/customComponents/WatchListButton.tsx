"use client";
import { Bookmark } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const handleClick = () => {};

const WatchListButton = () => {
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
