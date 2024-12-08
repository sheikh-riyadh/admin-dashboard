const Skeleton = () => (
  <div className={`animate-pulse bg-widget`} />
);

const AnalyticsSkeleton = () => {
  return (
    <div className="p-5 flex flex-col gap-5">
      {/* Skeleton for grid cards */}
      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-widget rounded-md shadow-md p-5 flex flex-col gap-3"
          >
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>

      {/* Skeleton for graph and sidebar */}
      <div className="mb-10 gap-5 h-full">
        <div className="grid grid-cols-12 gap-5">
          {/* Skeleton for graph section */}
          <div className="col-span-9 bg-widget rounded-md shadow-md h-screen">
            <Skeleton className="h-64 w-full" />
          </div>

          {/* Skeleton for sidebar */}
          <div className="col-span-3 grid grid-cols-1 gap-5">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-widget rounded-md shadow-md flex flex-col items-center justify-center p-5"
              >
                <Skeleton className="h-24 w-24 rounded-full" />
                <Skeleton className="h-6 w-1/2 mt-3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSkeleton;
