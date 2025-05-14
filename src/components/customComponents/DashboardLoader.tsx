import { Skeleton } from "../ui/skeleton";

const DashboardLoader = () => {
  return (
    <div className="rounded flex flex-col  justify-center items-center  gap-3 w-full ">
      <Skeleton className="h-4 w-[250px] bg-gray-300 animate-pulse " />

      <div className="flex-1 flex flex-col sm:flex-row items-center text-center gap-4 justify-center px-2 ">
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
        <Skeleton className="rounded-lg bg-gray-300 w-full sm:w-100 aspect-video flex-1" />
      </div>
    </div>
  );
};
export default DashboardLoader;
