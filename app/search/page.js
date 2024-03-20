"use client";
import { useSearchParams } from "next/navigation";
import ProductCrumb from "../../components/productDetails/ProductCrumb";
import React from "react";
import Search from "../../components/layout/Search";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  return (
    <>
      <ProductCrumb title="Search" />
      <Search term={term} />
    </>
  );
};

export default SearchPage;
