import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { newCart, products } = useLoaderData();

  const [cart, setCart] = useState(newCart);
  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
        <Toaster />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
