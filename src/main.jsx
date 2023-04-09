import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// components
import App from "./App";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";
import About from "./components/About";
import { cartAndProductLoader } from "./Loader/productLoader";
import Cart from "./components/Cart";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: cartAndProductLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
