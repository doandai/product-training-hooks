import React from "react";
import ProductListIphone from "./components/ProductListIphone";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import ProductListSamsung from "./components/ProductListSamsung";
import NotFound from "./components/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/Iphone",
    exact: false,
    main: () => <ProductListIphone />,
  },
  {
    path: "/Samsung",
    exact: false,
    main: () => <ProductListSamsung />,
  },
  {
    path: "/Cart",
    exact: false,
    main: () => <Cart />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
