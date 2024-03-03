"use client";
import React from "react";
import ProductCrumb from "../../../components/productDetails/ProductCrumb";
import BlogPost from "../../../components/blogs/BlogPost";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const blogId = params.id;
  return (
    <>
      <ProductCrumb title="Blog Details" />
      <BlogPost id={blogId} />
    </>
  );
};

export default page;
