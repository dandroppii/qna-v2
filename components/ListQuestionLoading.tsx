import { Skeleton } from './Skeleton';

const ListQuestionLoading = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      <Skeleton className="h-20 w-full rounded-xl" />
      <Skeleton className="h-20 w-full rounded-xl" />
      <Skeleton className="h-20 w-full rounded-xl" />
      <Skeleton className="h-20 w-full rounded-xl" />
    </div>
  );
};

export default ListQuestionLoading;
