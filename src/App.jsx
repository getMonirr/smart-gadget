import { createContext, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";

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
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;
