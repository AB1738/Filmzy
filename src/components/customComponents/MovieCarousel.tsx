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
    <section className=" overflow-y-auto w-full h-screen">
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
        <CarouselContent>
          {movies &&
            movies.map((movie) => (
              <CarouselItem key={movie.id}>
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={`${movie.title} Image`}
                    height={10000}
                    width={10000}
                    className="h-[500px]"
                  />
                </Link>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default MovieCarousel;
