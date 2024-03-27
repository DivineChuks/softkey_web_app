import React from "react";

const ShowCase = () => {
  return (
    <section className="bg-white w-full">
      <div className="mx-auto max-w-screen-lg px-4 py-16 h-full gap-4 grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 h-[250px] cursor-pointer">
          <img src="/check.jpg" className="h-full object-cover w-full" />
        </div>
        <div className="col-span-1 h-[250px] cursor-pointer">
          <img src="/banner.jpg" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
