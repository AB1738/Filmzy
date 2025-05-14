import { Skeleton } from "../ui/skeleton";

const CommentSectionLoader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <Skeleton className="h-4 w-[20%] rounded-full bg-gray-300 animate-pulse " />
        <Skeleton className="h-4 w-[80%] bg-gray-300 animate-pulse " />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-4 w-[20%] rounded-full bg-gray-300 animate-pulse " />
        <Skeleton className="h-4 w-[80%] bg-gray-300 animate-pulse " />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-4 w-[20%] rounded-full bg-gray-300 animate-pulse " />
        <Skeleton className="h-4 w-[80%] bg-gray-300 animate-pulse " />
      </div>
    </div>
  );
};
export default CommentSectionLoader;
