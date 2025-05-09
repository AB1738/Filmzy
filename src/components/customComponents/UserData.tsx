import TotalMoviesCard from "./TotalMoviesCard";

interface PropType {
  likedMovies: {
    id: number;
    movieId: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
  }[];
  watchListMovies: {
    id: number;
    movieId: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
  }[];
}
const UserData = ({ likedMovies, watchListMovies }: PropType) => {
  const totalMoviesLiked = likedMovies.length;
  const totalMoviesWatchlisted = watchListMovies.length;
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 pt-2 pb-4">
        <TotalMoviesCard total={totalMoviesLiked} totalType="likedMovies" />
        <TotalMoviesCard
          total={totalMoviesWatchlisted}
          totalType="watchListMovies"
        />
      </div>
    </div>
  );
};
export default UserData;
