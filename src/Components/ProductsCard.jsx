import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { AiOutlineShopping } from "react-icons/ai";
import { useNavigate } from "react-router";

const ProductsCard = ({
  image,
  discount,
  title,
  price,
  category,
  oldPrice,
  rating,
  rvw,
  id,
}) => {

  let navigate = useNavigate();
  const handleProductDetails = () => {
     
    navigate(`/productdetails/${id}`)

  };

  const handleAddToCart = () => {
    console.log("clicked")
  }
  return (
    <>
      <div  className="w-77.25 mb-16 cursor-pointer">
        <div className="relative">
          <img onClick={handleProductDetails}
            src={image}
            alt=""
            className="w-full object-cover border border-[#f5f5f5] rounded-2xl"
          />
          <div className="bg-[#f5f5f5] rounded-full absolute top-2 left-2 flex py-2 px-3.5 items-center gap-1  text-secondary">
            <CiDiscount1 />
            <h4 className="text-[12px] text-secondary ">
              {discount}% Discount
            </h4>
          </div>
          <div onClick={handleAddToCart} className="absolute top-2 right-2 w-9 h-9 bg-[#f3f3f3] rounded-full flex items-center justify-center">
            <AiOutlineShopping />
          </div>
        </div>
        <div className="mt-5 px-4">
          <Flex className="justify-between">
            <h3 className="text-[16px] font-semibold text-primary">{title}</h3>
            <h3 className="text-[16px] font-semibold text-primary">${price}</h3>
          </Flex>
          <Flex className="justify-between">
            <h4 className="text-[14px] text-secondary">{category}</h4>
            <h4 className="text-[14px] text-secondary line-through">
              ${oldPrice}
            </h4>
          </Flex>
          <div className="flex items-center gap-3 mt-3.75 ">
            <FaStar className="text-amber-500" />
            <h4 className="text-secondary">{rating}</h4>
            <h4>({rvw})</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
