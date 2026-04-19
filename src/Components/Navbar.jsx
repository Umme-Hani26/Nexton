import React from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
            <div className="flex items-center h-13 bg-[#F8F8F8] rounded-full px-4">
              <CiSearch className="text-gray-500 text-[18px] mr-2" />
              <input
                type="text"
                placeholder="Search in products..."
                className="bg-transparent outline-none w-full text-[14px] placeholder:text-[14px]"
              />
            </div>
          </div>
          <div className="flex gap-5.5 items-center text-lg">
            <NavLink to="/shop" end>
              <h4 className="text-[16px] font-semibold underline">Shop Now</h4>
            </NavLink>

            <LuUserRound />
            <LuShoppingCart />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
