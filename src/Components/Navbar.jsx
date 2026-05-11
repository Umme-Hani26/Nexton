import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.Allproducts.cart);
  const products = useSelector((state) => state.Allproducts.value);

  const [inputValue, setInputValue] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  let navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilterProducts([]);
    } else {
      const filterProduct = products.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      );
      setFilterProducts(filterProduct);
    }
  };

  const handleClick = (id) => {
    setInputValue("");
    setFilterProducts([]);
    navigate(`/productdetails/${id}`);
  };
  console.log(filterProducts);
  console.log(products);
  return (
    <>
      <Container>
        <div className="py-6.75 flex justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="w-full max-w-100">
            <div className="relative flex items-center h-13 bg-[#F8F8F8] rounded-full px-4">
              <CiSearch className="text-gray-500 text-[18px] mr-2" />
              <input
                type="text"
                value={inputValue}
                placeholder="Search in products..."
                className="bg-transparent outline-none w-full text-[14px] placeholder:text-[14px]"
                onChange={handleSearch}
              />

              {inputValue && filterProducts.length > 0 && (
                <ul className="bg-white w-full absolute top-13 rounded-2xl left-0 text-black py-2 px-4 z-50 max-h-60 overflow-y-auto">
                  {filterProducts.map((Product) => (
                    <li
                      key={Product.id}
                      onClick={() => handleClick(Product.id)}
                      className="flex gap-2 border-b border-[#efefef] p-2 items-center cursor-pointer hover:bg-gray-100"
                    >
                      <img
                        src={Product.thumbnail}
                        alt=""
                        className="w-10 h-10"
                      />
                      {Product.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex gap-5.5 items-center text-lg">
            <NavLink to="/shop" end>
              <h4 className="text-[16px] font-semibold underline">Shop Now</h4>
            </NavLink>

            <LuUserRound />
            <NavLink to={"cart"}>
              <div className="relative">
                <LuShoppingCart />
                <span className="absolute -top-2 -right-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-[13px]">
                  {data.length}
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
