"use client";
import { Movies } from "../../../types/movies";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";
import Link from "next/link";

interface PropType {
  movies: Movies;
  title: string;
}
const HomePageSlider = ({ movies, title }: PropType) => {
  return (
    <div className=" w-full p-5  mx-auto ">
      <h1 className="font-bold text-3xl pb-3 mt-[-10px]">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 ">
        {movies.map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            className="relative "
            key={movie.id}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={`Cover image for ${movie.title}`}
              height={1000}
              width={1000}
              className="w-full"
            />
            <div className="bg-black/20 h-full w-full absolute  top-0 "></div>

            <h3 className="absolute bottom-10 pl-10 text-xl font-semibold">
              {movie.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default HomePageSlider;
