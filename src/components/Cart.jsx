import React, { useContext, useState } from "react";
import CartItem from "./Cards/CartItem";
import { CartContext } from "../App";
import GButton from "./GButton";
import { clearCart } from "../utilities/realDB";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // handle clear cart
  const handleClearItem = () => {
    clearCart();
    setCart([]);
    toast.error("Clear your cart");
  };

  // total
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className="my-container">
      <div>
        {cart.length <= 0 && "Cart Is Empty"}
        {cart.length > 0 &&
          cart.map((pd) => <CartItem product={pd} key={pd.id} />)}
      </div>
      <div className="flex flex-col justify-end">
        <div>
          <p>Total: ${total}</p>
        </div>
        <div>
          <Link to={cart.length > 0 ? "" : "/"}>
            <GButton
              handleOnClick={cart.length > 0 && handleClearItem}
              className="btn-primary"
            >
              {cart.length > 0 ? "Clear Cart" : "Back to HomePage"}
            </GButton>
          </Link>
          <GButton
            disabled={cart.length <= 0 ? true : false}
            className={`btn-outlined disabled:hidden ${
              cart.length <= 0 ? "disabled" : ""
            }`}
          >
            Proceed Order
          </GButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
