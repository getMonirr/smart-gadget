import { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MyModal from "./components/Modal";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { newCart, products } = useLoaderData();

  const [cart, setCart] = useState(newCart);

  let [isOpen, setIsOpen] = useState(false);

  // session storage
  useEffect(() => {
    const controlSession = sessionStorage.getItem("hasCart");

    if (cart.length > 0 && controlSession !== "true") {
      setIsOpen(true);
      sessionStorage.setItem("hasCart", "true");
    }
  }, []);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
        <Toaster />
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
