import React from "react";
import Products from "./Products";
import watch from "../assets/watch.png";

const ParentPage = () => {
  
  const recommendations = [
    {
      id: 1,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 2,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 3,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 4,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 5,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
  ];

  const bestSellers = [
    {
      id: 6,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 7,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 8,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 9,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 10,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
  ];
  return(
    <>
    <div>
        <Products
        title1="Recommendations."
        title2="Best matching products for you"
        data={recommendations}
        />

        <Products
        title1="Best Sellers."
        title2="Best selling of the month"
        data={bestSellers}
        />
    </div>
    </>
    
  );
};

export default ParentPage;
