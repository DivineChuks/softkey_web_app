import ProductCrumb from "@/components/productDetails/ProductCrumb";
import SoftwareDetails from "@/components/softwares/SoftwareDetails";
import React from "react";

const SoftwarePage = () => {
  const categoryName = "Softwares";
  return (
    <>
      <ProductCrumb title="Softwares" />
      <SoftwareDetails categoryName={categoryName} />;
    </>
  );
};

export default SoftwarePage;
