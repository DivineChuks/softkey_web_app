import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 py-20">
      <div className="animate-pulse h-32 flex-1 bg-gray-200 rounded-t-md"></div>
      <div className="animate-pulse h-32 flex-1 bg-gray-200 rounded-t-md"></div>
      <div className="animate-pulse h-32 flex-1 bg-gray-200 rounded-t-md"></div>
      <div className="animate-pulse h-32 flex-1 bg-gray-200 rounded-t-md"></div>
    </div>
  );
};

export default SkeletonLoader;
