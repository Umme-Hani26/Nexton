import React from "react";
import shopnow from "../assets/shop-now.png";
import Container from "./Container";
import { Link } from "react-router";

const ShopNow = () => {
  return (
    <>
      <Container>
        <div className="mt-16 sm:mt-20 lg:mt-35 mb-10 sm:mb-13 px-4 sm:px-0">
          <Link to="/shop">
            <div className="relative w-full overflow-hidden rounded-2xl">
              {/* Banner Image */}
              <img
                src={shopnow}
                alt="Shop Now Banner"
                className="
                  hidden lg:block
                   w-full
                   lg:h-109.25
                   object-cover
                   rounded-2xl"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-10 lg:px-20">
                {/* Left Text */}
                <div className="max-w-xl">
                  <p className="text-gray-500 text-sm sm:text-lg font-medium mb-2 sm:mb-4">
                    100% Original Products
                  </p>

                  <h1 className="text-[#111827] font-bold leading-tight text-2xl sm:text-4xl lg:text-6xl mb-3 sm:mb-6">
                    The All New Fashion <br />
                    Collection Items
                  </h1>

                  <p className="text-gray-500 text-sm sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-8">
                    Starting from: $59.99
                  </p>

                  <button className="bg-[#0f172a] hover:bg-black text-white px-5 sm:px-8 py-2 sm:py-4 rounded-full text-sm sm:text-lg font-medium shadow-lg transition duration-300 hover:scale-105">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ShopNow;
