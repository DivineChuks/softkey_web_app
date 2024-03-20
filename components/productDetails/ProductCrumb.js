import React from "react";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const ProductCrumb = ({ title }) => {
  return (
    <div className="px-8 py-[20px] bg-[#f6f6f6]">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative flex h-[150px] flex-col items-center justify-center bg-crumb mb-3 bg-cover bg-center text-white">
          <div className="absolute inset-0 z-10 w-full bg-[#000000b1]"></div>
          <h2 className="z-20 text-[25px] font-bold text-white">{title}</h2>
          <div className="z-20 flex items-center gap-2 text-white">
            <Link href="/">Home</Link>
            <BiChevronRight color="white" />
            <p className="font-semibold text-accent">{title}</p>
          </div>
        </div>
        {/* <Sort /> */}
      </div>
    </div>
  );
};

export default ProductCrumb;
