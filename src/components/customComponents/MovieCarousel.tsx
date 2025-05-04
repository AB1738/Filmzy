"use client";
import Image from "next/image";

import { Movies } from "../../../types/movies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

interface PropType {
  movies: Movies;
}

const MovieCarousel = ({ movies }: PropType) => {
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
      className="overflow-hidden relative "
    >
      <CarouselContent className="flex h">
        {movies &&
          movies.map((movie) => (
            <CarouselItem key={movie.id} className="">
              <Link href={`/movie/${movie.id}`} className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={`${movie.title} Image`}
                  height={1000}
                  width={1000}
                  className="w-full h-[300px] sm:h-[450px] lg:h-[550px] object-cover object-[10%_45%]"
                />
                <div className="absolute bottom-20 w-full px-4 space-y-3 z-20">
                  <h1 className="text-3xl font-bold">{movie.title}</h1>
                  <p className="line-clamp-2">{movie.overview}</p>
                </div>
                <div className="bg-gradient-to-b from-black/20 to-white/40  h-full w-full absolute  top-0 "></div>
              </Link>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
export default MovieCarousel;
