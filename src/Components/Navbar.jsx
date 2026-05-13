import React, { useState } from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { Link, NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const data = useSelector((state) => state.Allproducts.cart);
  const products = useSelector((state) => state.Allproducts.value);

   const [menuOpen, setMenuOpen] = useState(false);

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
      {/* MAIN NAV */}
      <div className="flex items-center justify-between py-4 md:py-6 gap-4 px-4 sm:px-6 lg:px-10 2xl:px-16">

        {/* LEFT - LOGO */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* MIDDLE - SEARCH */}
        <div className="relative w-full max-w-[500px]">
          <div className="flex items-center bg-[#F8F8F8] rounded-full px-4 h-11 md:h-13">

            <CiSearch className="text-gray-500 text-[18px] mr-2" />

            <input
              type="text"
              value={inputValue}
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-[14px]"
              onChange={handleSearch}
            />
          </div>

          {/* SEARCH DROPDOWN */}
          {inputValue && filterProducts.length > 0 && (
            <ul className="absolute top-13 left-0 w-full bg-white rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {filterProducts.map((Product) => (
                <li
                  key={Product.id}
                  onClick={() => handleClick(Product.id)}
                  className="flex gap-2 p-2 border-b hover:bg-gray-100 cursor-pointer items-center"
                >
                  <img
                    src={Product.thumbnail}
                    className="w-10 h-10"
                  />
                  <span>{Product.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT - ICONS + HAMBURGER */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* HAMBURGER (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl md:hidden"
          >
            <FaBars />
          </button>

          {/* Desktop icons */}
          <div className="hidden md:flex items-center gap-5 text-lg">

            <NavLink to="/shop">
              <h4 className="font-semibold underline">Shop</h4>
            </NavLink>

            <LuUserRound />

            <NavLink to="cart">
              <div className="relative">
                <LuShoppingCart />
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[12px] w-5 h-5 flex items-center justify-center rounded-full">
                  {data.length}
                </span>
              </div>
            </NavLink>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
     {menuOpen && (
  <div className="md:hidden flex flex-col gap-3 pb-4">
    <NavLink to="/shop">Shop</NavLink>
    <NavLink to="cart">Cart ({data.length})</NavLink>
  </div>
)}
    </Container>
    </>
  );
};

export default Navbar;
