"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GenreSelector from "./GenreSelector";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim().length < 1) return;
    router.push(`/movies/search?query=${query}`);
    setQuery("");
  };
  return (
    <header className="fixed top-0 w-full h-20 z-20">
      <nav className="flex justify-between items-center py-5 px-5 sm:px-15">
        <Link href={"/"} className="text-3xl sm:text-5xl font-bold">
          Filmzy
        </Link>
        <div className="flex gap-4">
          <GenreSelector />
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Search for movies"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
          {/* <Button>Log In</Button> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;
