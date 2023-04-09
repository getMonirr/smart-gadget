import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((pd) => (
          <ProductCard key={pd.id} product={pd} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
