import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clapperboard, Heart } from "lucide-react";

interface PropType {
  total: number;
  totalType: "likedMovies" | "watchListMovies";
}
const TotalMoviesCard = ({ total, totalType }: PropType) => {
  return (
    <Card className="rounded bg-[#85739e] dark:bg-[#3c2f4e] text-white border-none shadow-2xl">
      <CardHeader>
        <CardTitle>
          <h3>
            {totalType === "likedMovies"
              ? "Your Liked Movies Summary"
              : "Your Watchlist Summary"}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        {totalType === "watchListMovies" ? (
          <Clapperboard size={50} />
        ) : (
          <Heart size={50} className="text-red-500" />
        )}

        <p>
          {totalType === "likedMovies"
            ? total > 1
              ? `You have liked ${total} movies. Keep enjoying your favorites and feel free to add more movies you love!`
              : total === 1
              ? `You have liked 1 movie. Keep enjoying your favorite and feel free to add more movies you love!`
              : `No liked movies so far. Find some films you love and give them a thumbs up!`
            : total > 1
            ? `There are ${total} movies on your watchlist. Start watching them and check them off your list as you go!`
            : total === 1
            ? `There is 1 movie on your watchlist. Start watching it and check it off your list!`
            : `Nothing on your watchlist yet. Find some films you'd love to watch!`}
        </p>
      </CardContent>
    </Card>
  );
};
export default TotalMoviesCard;
