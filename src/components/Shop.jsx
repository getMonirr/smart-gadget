import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/realDB";
import { ProductContext } from "../App";

const Shop = () => {

  const products = useContext(ProductContext);

  // handle add to cart
  const handleAddToCart = (id) => {
    addToDB(id)
  };
  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((pd) => (
          <ProductCard
            handleAddToCart={handleAddToCart}
            key={pd.id}
            product={pd}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
