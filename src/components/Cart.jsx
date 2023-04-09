import React, { useContext, useState } from "react";
import CartItem from "./Cards/CartItem";
import { CartContext } from "../App";

const Cart = () => {
const [cart] = useContext(CartContext);

  return (
    <div className="my-container">
      {cart.map((pd) => (
        <CartItem product={pd} key={pd.id} />
      ))}
    </div>
  );
};

export default Cart;
