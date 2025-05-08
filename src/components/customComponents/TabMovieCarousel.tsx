"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
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
const TabMovieCarousel = ({ movies }: PropType) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {movies.map((movie) => (
        <SwiperSlide>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={`${movie.title} cover image`}
            height={1000}
            width={1000}
            className="rounded-lg w-full"
          />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TabMovieCarousel;
