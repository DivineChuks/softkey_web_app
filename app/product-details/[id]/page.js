"use client";
import Details from "../../../components/productDetails/Details";
import ProductCrumb from "../../../components/productDetails/ProductCrumb";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();
  const productId = params.id;
  return (
    <div className="px-4 py-10 bg-[#f6f6f6]">
      <ProductCrumb title="Product-details" />
      <Details productId={productId} />
    </div>
  );
};

export default page;
