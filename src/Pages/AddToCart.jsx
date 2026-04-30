import React from "react";
import Flex from "../Components/Flex";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import { useSelector, useDispatch } from "react-redux";
import { decrementReducer, incrementReducer, removeReducer } from "../Slices/ProductSlice";

const AddToCart = () => {
  const data = useSelector((state) => state.Allproducts.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeReducer(id));
  };
  const handleIncrement = (id) =>{
    dispatch(incrementReducer(id))
  }
    const handleDecrement = (id) =>{
    dispatch(decrementReducer(id))
  }
  return (
    <>
      <Container>
        <BreadCrumb />
        <div className="bg-white shadow-sm mt-13">
          <Flex className="px-10 py-6 justify-between items-center mb-10">
            <div className="flex items-center gap-5 w-62.5">
              <h4 className="font-medium">Product</h4>
            </div>
            <h2 className="font-medium">Price</h2>
            <h4 className="font-medium">Quantity</h4>
            <h2 className="font-medium">Subtotal</h2>
          </Flex>
        </div>

        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-sm mt-13">
            <Flex className="px-10 py-6 justify-between items-center mb-10">
              <div className="flex items-center gap-5 w-62.5">
                <div className="relative">
                  <span
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-0 left-0 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex justify-center items-center cursor-pointer"
                  >
                    X
                  </span>
                  <img src={item.thumbnail} alt="" className="w-13.5" />
                </div>
                <h4>{`${item.title.slice(0, 10)}....`}</h4>
                {/*  */}
              </div>
              <h2>${item.price}</h2>

              <Flex className="px-3 py-1.5 border rounded-sm items-center gap-3">
                {item.Quantity}
                <Flex className="flex-col gap-1">
                  <FaChevronUp className="text-[10px]" onClick={()=> handleIncrement(item.id)}/>
                  <FaChevronDown className="text-[10px]" onClick={()=> handleDecrement(item.id)}/>
                </Flex>
              </Flex>
              <h2>${item.price*item.Quantity}</h2>
            </Flex>
          </div>
        ))}
      </Container>
    </>
  );
};

export default AddToCart;
