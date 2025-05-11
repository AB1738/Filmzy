"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import GenreSelector from "./GenreSelector";
import { Menu, X } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  console.log(pathname);
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
    <header className={` fixed top-0 w-full h-20 z-20 `}>
      <nav className="flex flex-col gap-2 md:flex-row justify-between items-center p-5 md:px-15">
        <div className="flex items-center w-full md:flex-1 justify-between">
          <Link href={"/"} className="text-3xl sm:text-5xl font-bold">
            Filmzy
          </Link>
          {!isMenuOpen && (
            <Sheet>
              <SheetTrigger className="text-white">
                {" "}
                <Menu className="md:hidden self-end cursor-pointer" />
              </SheetTrigger>
              <SheetContent className=" bg-[url(/img/SideBar.jpg)] bg-cover bg-center border-l-0">
                <div className="relative h-full w-full bg-black/50">
                  <SheetHeader>
                    <SheetTitle className="text-white text-xl font-bold">
                      Movie Night Starts Here
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4.5 px-2">
                    <SignedIn>
                      <UserButton />
                    </SignedIn>
                    <SignedOut>
                      <Button
                        asChild
                        className="cursor-pointer font-semibold bg-white w-fit mx-auto text-black"
                      >
                        <SignInButton mode="modal" />
                      </Button>
                    </SignedOut>
                    <form onSubmit={handleSubmit} className="w-full md:w-fit">
                      <Input
                        type="text"
                        placeholder="Search for movies"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-white dark:bg-white"
                      />
                    </form>

                    <GenreSelector />
                    <SignedIn>
                      <Link
                        href="/dashboard"
                        className=" bg-[#fff] text-black  font-semibold px-2.5 py-1.5 rounded flex items-center justify-center"
                      >
                        Filmzy Hub
                      </Link>
                    </SignedIn>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
          {/* {isMenuOpen && (
            <X
              className="md:hidden self-end cursor-pointer"
              onClick={handleMenuStatus}
            />
          )} */}
        </div>

        <div
          className={` p-3  hidden md:flex   flex-2 flex-col-reverse w-full items-center md:w-[375px] md:flex-row gap-4  justify-end`}
        >
          <SignedIn>
            <Link
              href="/filmzyhub"
              className=" bg-[#fff] w-fit whitespace-nowrap text-black  px-2.5 py-1.5 rounded flex items-center justify-center"
            >
              Filmzy Hub
            </Link>
          </SignedIn>
          <GenreSelector />
          <form onSubmit={handleSubmit} className="w-full md:w-fit">
            <Input
              type="text"
              placeholder="Search for movies"
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-white dark:bg-white text-black"
            />
          </form>

          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              className="cursor-pointer font-semibold bg-transparent"
            >
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
export default Header;
