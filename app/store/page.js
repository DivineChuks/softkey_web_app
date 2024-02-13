import Breadcrumb from "@/components/layout/Breadcrumb";
import StoreCollections from "@/components/store/StoreCollections";
import StoreSidebar from "@/components/store/StoreSidebar";
import React from "react";

const page = () => {
  return (
    <div className="px-4 py-10 w-full">
      <Breadcrumb />
      <h2 className="text-3xl font-bold ml-10 mt-8">Categories</h2>
      <div className="flex mx-auto max-w-screen-xl w-full">
        <StoreSidebar />
        <StoreCollections />
      </div>
    </div>
  );
};

export default page;
