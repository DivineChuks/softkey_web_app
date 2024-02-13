import Breadcrumb from "@/components/layout/Breadcrumb";
import Details from "@/components/productDetails/Details";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 px-4 py-10">
      <Breadcrumb />
      <Details />
    </div>
  );
};

export default page;
