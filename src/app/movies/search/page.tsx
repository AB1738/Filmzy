import getQueriedMovie from "@/lib/getQueriedMovie";
// import { getQueriedMovie } from "@/app/actions/getQueriedMovie";

interface MovieSearchProps {
  searchParams: Promise<{ query: string }>;
}

const MovieSearchPage = async ({ searchParams }: MovieSearchProps) => {
  const { query } = await searchParams;
  console.log(query);
  const movies = await getQueriedMovie(query);
  //   console.log(movies);
  return <div>page</div>;
};
export default MovieSearchPage;
