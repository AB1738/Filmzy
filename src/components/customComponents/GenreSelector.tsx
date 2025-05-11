"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Genres } from "../../../types/genres";
import { getMovieGenres } from "@/app/actions/getGenre";
import { useRouter } from "next/navigation";

const GenreSelector = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Genres>([]);

  useEffect(() => {
    const getGenres = async () => {
      const movieGenres = await getMovieGenres();
      if (movieGenres) setGenres(movieGenres);
    };
    getGenres();
  }, []);

  const handleChange = (e: string) => {
    router.push(`/movies/genres/?genre=${e}`);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="cursor-pointer text-black dark:text-black bg-white dark:bg-white w-full md:w-fit">
        <SelectValue
          placeholder="Genres"
          className="bg-white dark:bg-white text-black dark:text-black"
        />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-white text-black dark:text-black">
        {genres &&
          genres.map((genre) => (
            <SelectItem
              value={genre.name + "/" + genre.id}
              key={genre.id}
              className="cursor-pointer bg-white dark:bg-white text-black dark:text-black dark:hover:bg-gray-100"
            >
              {genre.name}{" "}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};
export default GenreSelector;
