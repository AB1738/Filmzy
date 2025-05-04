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
      <SelectTrigger className="w-fit cursor-pointer text-black bg-white">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        {genres &&
          genres.map((genre) => (
            <SelectItem
              value={genre.name + "/" + genre.id}
              key={genre.id}
              className="cursor-pointer"
            >
              {genre.name}{" "}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};
export default GenreSelector;
