
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import Container from "./Container"
import { PiKeyReturn } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { RiRefund2Line } from "react-icons/ri";

const Counter = () => {
  return (
    <>
   <Container>
       <div className="w-324 flex gap-9 border border-[#E5E7EB] rounded-2xl py-6 px-10 mt-13 mb-8">
        <div className="flex items-center gap-4.5 ">
          <LiaShippingFastSolid className="text-3xl"/>
          <div className="border-r pr-22.5 border-[#E5E7EB]">
            <h4 className="text-[18px] font-semibold">Free shipping</h4>
            <p className="text-[14px]">On orders over $50.00</p>
          </div>
        </div>
         <div className="flex items-center gap-4.5 ">
          <PiKeyReturn className="text-3xl"/>
          <div className="border-r pr-22.5 border-[#E5E7EB]">
            <h4 className="text-[18px] font-semibold">Very easy to return</h4>
            <p className="text-[14px]">Just phone number</p>
          </div>
        </div>
         <div className="flex items-center gap-4.5 ">
          <TfiWorld className="text-3xl"/>
          <div className="border-r pr-22.5 border-[#E5E7EB]">
            <h4 className="text-[18px] font-semibold">Worldwide delivery</h4>
            <p className="text-[14px]">Fast delivery worldwide</p>
          </div>
        </div>
         <div className="flex items-center gap-4.5 ">
          <RiRefund2Line className="text-3xl"/>
          <div>
            <h4 className="text-[18px] font-semibold">Refunds policy</h4>
            <p className="text-[14px]">60 days return for any reason</p>
          </div>
        </div>
      </div>
   </Container>
    </>
  );
};

export default Counter;
