import React, { useState, useEffect } from "react";
import Products from "./Products";
import axios from "axios";

const ParentPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");

        // API data state এ রাখলাম
        setProducts(res.data.products);
      } catch (error) {
        console.log("API Fetch Error", error);
      }
    };

    getProducts();
  }, []);

  return(
    <>
    <div>
        <Products
        title1="Recommendations."
        title2="Best matching products for you"
        data={products.slice(5,25)}
        />

        <Products
        title1="Best Sellers."
        title2="Best selling of the month"
        data={products}
        />
    </div>
    </>
    
  );
};

export default ParentPage;
