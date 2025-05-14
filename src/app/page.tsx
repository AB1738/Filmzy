import HomePageSlider from "@/components/customComponents/HomePageSlider";
import MovieCarousel from "@/components/customComponents/MovieCarousel";
import getCurrentlyPlayingMovies from "@/lib/getCurrentlyPlayingMovies";

import getPopularMovies from "@/lib/getPopularMovies";
import getTopRatedMovies from "@/lib/getTopRatedMovies";
import getUpcomingMovies from "@/lib/getUpcomingMovies";

export default async function Home() {
  const currentMovies = await getCurrentlyPlayingMovies();
  const popularMovies = await getPopularMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <>
      <section>
        {currentMovies && <MovieCarousel movies={currentMovies} />}
      </section>
      <section>
        {upcomingMovies && (
          <HomePageSlider movies={upcomingMovies} title="Upcoming Movies" />
        )}
      </section>
      <section>
        {popularMovies && (
          <HomePageSlider movies={popularMovies} title="Popular Movies" />
        )}
      </section>
      <section>
        {topRatedMovies && (
          <HomePageSlider movies={topRatedMovies} title="Top Rated Movies" />
        )}
      </section>
    </>
  );
}

// https://image.tmdb.org/t/p/w500
// https://image.tmdb.org/t/p/original
