import { currentUser } from "@clerk/nextjs/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "../../../lib/prisma";
import RecommendedMovies from "@/components/customComponents/RecommendedMovies";
import TabMovieCarousel from "@/components/customComponents/TabMovieCarousel";

const page = async () => {
  const user = await currentUser();
  if (!user) return;
  const watchListData = await prisma.watchList.findMany({
    where: {
      userId: user.id,
    },
    include: {
      movie: true,
    },
  });
  const watchListMovies = watchListData.map((data) => data.movie);
  const likedData = await prisma.likedMovie.findMany({
    where: {
      userId: user.id,
    },
    include: {
      movie: true,
    },
  });
  const likedMovies = likedData.map((data) => data.movie);
  console.log(watchListMovies);

  return (
    <div className="flex flex-col items-center text-center">
      <h1 className=" text-3xl sm:text-4xl font-bold py-3">FilmzyHub</h1>
      <div>stats go here</div>
      <Tabs defaultValue="watchList" className="w-full rounded-none">
        <TabsList className="mx-auto rounded-none">
          <TabsTrigger value="watchList" className="cursor-pointer ">
            🎬Watchlist
          </TabsTrigger>
          <TabsTrigger value="likedMovies" className="cursor-pointer">
            ❤️Liked Movies
          </TabsTrigger>
        </TabsList>
        <TabsContent value="watchList">
          movies on watchlist show up here
          {watchListMovies && <TabMovieCarousel movies={watchListMovies} />}
        </TabsContent>
        <TabsContent value="likedMovies">
          Liked movies show up here
          {likedMovies && <TabMovieCarousel movies={likedMovies} />}
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default page;
