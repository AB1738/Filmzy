import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="rounded flex flex-col justify-center items-center  gap-1.5s w-full ">
      <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-[75%] animate-pulse aspect-video flex-1" />
      <div className="flex-1 flex flex-col items-center text-center gap-4 justify-center px-2 ">
        <Skeleton className="h-4 w-full bg-gray-300 animate-pulse " />
        <Skeleton className="h-4 w-full bg-gray-300 animate-pulse " />
      </div>
    </div>
  );
};
export default loading;
