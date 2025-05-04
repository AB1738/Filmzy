import getMovieByGenre from "@/lib/getMovieByGenre";

interface GenreSearchProps {
  searchParams: Promise<{ genre: string }>;
}

const GenrePage = async ({ searchParams }: GenreSearchProps) => {
  const { genre } = await searchParams;
  const id = genre.split("/")[1];
  console.log(id);
  const movies = await getMovieByGenre(parseInt(id));
  console.log(movies);
  return <div>GenrePage</div>;
};
export default GenrePage;
