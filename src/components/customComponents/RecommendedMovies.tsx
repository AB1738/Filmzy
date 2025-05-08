"use client";
import Image from "next/image";
import { Movies } from "../../../types/movies";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

interface PropType {
  movies: Movies;
}
const RecommendedMovies = ({ movies }: PropType) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4500,
        }),
      ]}
    >
      <CarouselContent className="">
        {movies.map((movie) => (
          <CarouselItem className="sm:basis-1/2 md:basis-1/3" key={movie.id}>
            <Link href={`/movie/${movie.id}`} className="relative">
              <Image
                src={
                  `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` ||
                  `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }
                alt={`${movie.title} cover image`}
                height={1000}
                width={1000}
                className="rounded-lg w-full max-h-60"
              />
              <div className="absolute bottom-5 w-full px-4 space-y-3 z-20">
                <h1 className="text-xl font-bold">{movie.title}</h1>
              </div>
              <div className="bg-black/50 h-full w-full absolute  top-0 "></div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default RecommendedMovies;
