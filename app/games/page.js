import GameDetails from "../../components/games/GamesDetails";
import ProductCrumb from "../../components/productDetails/ProductCrumb";
import React from "react";

const GamesPage = () => {
  const categoryName = "Games";
  return (
    <>
      <ProductCrumb title="Games" />
      <GameDetails categoryName={categoryName} />
    </>
  );
};

export default GamesPage;
