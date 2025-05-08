"use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import MovieList from "./MovieList";
import { useState } from "react";

interface PropType {
  movies: {
    id: number;
    movieId: number;
    title: string;
    backdrop_path: string;
    overview: string;
    release_date: string;
  }[];
}
const TabContent = ({ movies }: PropType) => {
  const [isListView, setIsListView] = useState<boolean>(true);
  const handleClick = () => {
    setIsListView(!isListView);
  };
  if (movies.length < 1)
    return <h1 className="text-3xl font-bold py-3">No movies added yet</h1>;
  return (
    <>
      <button
        onClick={handleClick}
        className="cursor-pointer pt-2 pb-5 hover:scale-101 w-fit mx-auto p-3"
      >
        Change View
      </button>
      {isListView ? (
        <MovieList movies={movies} />
      ) : (
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
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={movie.id}
              >
                <Link href={`/movie/${movie.movieId}`} className="relative">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={`${movie.title} cover image`}
                    height={1000}
                    width={1000}
                    className="rounded-lg w-full max-h-60"
                  />
                  <div className="absolute bottom-5 w-full px-4 space-y-3 z-20">
                    <h1 className="text-base font-bold">{movie.title}</h1>
                  </div>
                  <div className="bg-black/30 h-full w-[200%] absolute  top-0 "></div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </>
  );
};
export default TabContent;

// <Swiper
//   spaceBetween={30}
//   effect={"fade"}
//   loop={true}
//   autoplay={{
//     delay: 6500,
//     disableOnInteraction: false,
//   }}
//   navigation={true}
//   pagination={{
//     clickable: true,
//   }}
//   modules={[Autoplay, EffectFade, Navigation, Pagination]}
//   className="mySwiper"
// >
//   {movies.map((movie) => (
//     <SwiperSlide>
//       <Image
//         src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
//         alt={`${movie.title} cover image`}
//         height={1000}
//         width={1000}
//         className="rounded-lg w-full"
//       />{" "}
//     </SwiperSlide>
//   ))}
// </Swiper>
