import { Skeleton } from "@/components/ui/skeleton";

const MoviesLoading = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-2 items-center">
      <div className="rounded flex flex-col sm:flex-row justify-center items-center  gap-3 w-full ">
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
        <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 ">
          <Skeleton className="h-4 w-[250px] bg-gray-300 " />
          <Skeleton className="h-4 w-[200px] bg-gray-300 " />
        </div>
      </div>
      <div className="rounded flex flex-col sm:flex-row justify-center items-center  gap-3 w-full ">
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
        <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 ">
          <Skeleton className="h-4 w-[250px] bg-gray-300 " />
          <Skeleton className="h-4 w-[200px] bg-gray-300 " />
        </div>
      </div>
      <div className="rounded flex flex-col sm:flex-row justify-center items-center  gap-3 w-full ">
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
        <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 ">
          <Skeleton className="h-4 w-[250px] bg-gray-300 " />
          <Skeleton className="h-4 w-[200px] bg-gray-300 " />
        </div>
      </div>
      <div className="rounded flex flex-col sm:flex-row justify-center items-center  gap-3 w-full ">
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
        <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 ">
          <Skeleton className="h-4 w-[250px] bg-gray-300 " />
          <Skeleton className="h-4 w-[200px] bg-gray-300 " />
        </div>
      </div>
    </div>
  );
};
export default MoviesLoading;
