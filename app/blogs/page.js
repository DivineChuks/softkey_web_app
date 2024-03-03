import React from "react";
import BlogDetails from "../../components/blogs/BlogDetails";
import ProductCrumb from "../../components/productDetails/ProductCrumb";

const page = () => {
  return (
    <>
      <ProductCrumb title="Blogs" />
      <BlogDetails />
    </>
  );
};

export default page;
