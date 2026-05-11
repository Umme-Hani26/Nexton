import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { productReducer } from "./Slices/ProductSlice";
import axios from "axios";

const RootLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      dispatch(productReducer(res.data.products));
    }

    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
