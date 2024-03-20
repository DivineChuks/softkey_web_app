import ProductCrumb from "../../components/productDetails/ProductCrumb";
import SoftwareDetails from "../../components/softwares/SoftwareDetails";
import React from "react";

const SoftwarePage = () => {
  const categoryName = "Softwares";
  return (
    <div className="bg-[#f6f6f6] w-full">
      <ProductCrumb title="Softwares" />
      <SoftwareDetails categoryName={categoryName} />;
    </div>
  );
};

export default SoftwarePage;
