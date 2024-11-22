const AnalyticeCardSkeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {[...Array(4).keys()].map((key) => (
        <div
          key={key}
          className="border p-7 rounded-md bg-white shadow-md animate-pulse"
        >
          {/* Skeleton for icon */}
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              {/* Skeleton for title */}
              <div className="h-5 w-32 bg-gray-300 rounded"></div>
              {/* Skeleton for subtitle */}
              <div className="h-4 w-20 bg-gray-300 rounded mt-2"></div>
            </div>

            {/* Skeleton for percentage and icon */}
            <div className="flex items-center gap-1">
              <div className="h-4 w-8 bg-gray-300 rounded"></div>
              <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalyticeCardSkeleton;
