"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import GenreSelector from "./GenreSelector";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim().length < 1) return;
    router.push(`/movies/search?query=${query}`);
    setQuery("");
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleMenuStatus = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 w-full h-20 z-20 bg-[#30273d] md:bg-transparent">
      <nav className="flex flex-col gap-2 md:flex-row justify-between items-center p-5 md:px-15">
        <div className="flex items-center w-full md:flex-1 justify-between">
          <Link href={"/"} className="text-3xl sm:text-5xl font-bold">
            Filmzy
          </Link>
          {!isMenuOpen && (
            <Menu
              className="md:hidden self-end cursor-pointer"
              onClick={handleMenuStatus}
            />
          )}
          {isMenuOpen && (
            <X
              className="md:hidden self-end cursor-pointer"
              onClick={handleMenuStatus}
            />
          )}
        </div>

        <div
          className={`${
            isMenuOpen ? " visible opacity-100" : "invisible opacity-0"
          }  p-3 bg-[#30273d] md:bg-transparent md:visible md:opacity-100 flex flex-col w-full  md:w-[375px] md:flex-row gap-4 transition-opacity duration-300`}
        >
          <GenreSelector />
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Search for movies"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="placeholder-white"
            />
          </form>
          <Button>Log In</Button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
