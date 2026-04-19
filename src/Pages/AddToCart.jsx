import React from "react";
import Flex from "../Components/Flex";
import cartimg from "../assets/cartitem-image.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";

const AddToCart = () => {
  return (
    <>
      <Container>
        <BreadCrumb />
        <div className="bg-white shadow-sm mt-13">
          <Flex className="px-10 py-6 justify-between items-center mb-10">
            <h2 className="flex items-center gap-5 w-62.5">
              <h4 className="font-medium">Product</h4>
            </h2>
            <h2 className="font-medium">Price</h2>
            <h4 className="font-medium">Quantity</h4>
            <h2 className="font-medium">Subtotal</h2>
          </Flex>
        </div>
        <div className="bg-white shadow-sm mt-13">
          <Flex className="px-10 py-6 justify-between items-center mb-10">
            <h2 className="flex items-center gap-5 w-62.5">
              <img src={cartimg} alt="" className="w-13.5" />
              <h4>Black Automatic Watch</h4>
              {/* {`${title.slice(0,10)}....`} */}
            </h2>
            <h2>$650</h2>

            <Flex className="px-3 py-1.5 border rounded-sm items-center gap-3">
              01
              <Flex className="flex-col gap-1">
                <FaChevronUp className="text-[10px]" />
                <FaChevronDown className="text-[10px]" />
              </Flex>
            </Flex>
            <h2>$650</h2>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default AddToCart;
