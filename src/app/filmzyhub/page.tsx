import { currentUser } from "@clerk/nextjs/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "../../../lib/prisma";
import TabContent from "@/components/customComponents/TabContent";
import UserData from "@/components/customComponents/UserData";
import { Suspense } from "react";
import DashboardLoader from "@/components/customComponents/DashboardLoader";

type Data = {
  id: number;
  userId: string;
  movieId: number;
  createdAt: Date;
  movie: {
    id: number;
    movieId: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
  };
};

const page = async () => {
  const user = await currentUser();
  if (!user) return;
  const watchListData: Data[] = await prisma.watchList.findMany({
    where: {
      userId: user.id,
    },
    include: {
      movie: true,
    },
  });
  const watchListMovies = watchListData.map((data) => data.movie);
  const likedData: Data[] = await prisma.likedMovie.findMany({
    where: {
      userId: user.id,
    },
    include: {
      movie: true,
    },
  });
  const likedMovies = likedData.map((data) => data.movie);
  console.log(user);

  return (
    <div className="flex flex-col h-full items-center text-center">
      <h1 className=" text-3xl sm:text-4xl font-bold py-3">FilmzyHub</h1>
      <Suspense fallback={<DashboardLoader />}>
        <h2 className=" font-semibold py-2">
          Hey,{" "}
          {user.firstName || user.emailAddresses[0].emailAddress.split("@")[0]}!
          Welcome to your FilmzyHub dashboard. Ready to explore more movies?
        </h2>
        <UserData likedMovies={likedMovies} watchListMovies={watchListMovies} />
        <Tabs defaultValue="watchList" className="w-full rounded-none ">
          <TabsList className="mx-auto rounded-none ">
            <TabsTrigger value="watchList" className="cursor-pointer  ">
              🎬 Your Watchlist
            </TabsTrigger>
            <TabsTrigger value="likedMovies" className="cursor-pointer ">
              ❤️ Your Liked Movies
            </TabsTrigger>
          </TabsList>
          <TabsContent value="watchList">
            <div className="flex flex-col w-full">
              <h3 className="text-lg font-semibold text-left py-2">
                🎬Movies You Plan to Watch
              </h3>
              {watchListMovies && <TabContent movies={watchListMovies} />}
            </div>
          </TabsContent>
          <TabsContent value="likedMovies">
            <div className="flex flex-col w-full">
              <h3 className="text-lg font-semibold text-left py-2">
                {"❤️Movies You've Liked"}
              </h3>
              {likedMovies && <TabContent movies={likedMovies} />}
            </div>
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  );
};
export default page;
