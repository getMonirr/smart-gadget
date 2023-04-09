import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utilities/realDB";
import { CartContext, ProductContext } from "../App";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  // handle add to cart
  const handleAddToCart = (product) => {
    const existProduct = cart.find((pd) => pd.id === product.id);
    if (!existProduct) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      existProduct.quantity = existProduct.quantity + 1;
      const rest = cart.filter((pd) => pd.id !== product.id);
      setCart([...rest, existProduct]);
    }

    addToDB(product.id);
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
