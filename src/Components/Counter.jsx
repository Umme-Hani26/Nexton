
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
      <div className="mt-0 md:border border-[#E5E7EB] rounded-2xl py-6 px-6 md:mt-13 mb-8">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ITEM 1 */}
          <div className="flex items-center gap-4 lg:border-r lg:pr-6 border-[#E5E7EB]">
            <LiaShippingFastSolid className="text-3xl" />
            <div>
              <h4 className="text-[16px] lg:text-[18px] font-semibold">
                Free shipping
              </h4>
              <p className="text-[13px] lg:text-[14px]">
                On orders over $50.00
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-4 lg:border-r lg:pr-6 border-[#E5E7EB]">
            <PiKeyReturn className="text-3xl" />
            <div>
              <h4 className="text-[16px] lg:text-[18px] font-semibold">
                Very easy to return
              </h4>
              <p className="text-[13px] lg:text-[14px]">
                Just phone number
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-4 lg:border-r lg:pr-6 border-[#E5E7EB]">
            <TfiWorld className="text-3xl" />
            <div>
              <h4 className="text-[16px] lg:text-[18px] font-semibold">
                Worldwide delivery
              </h4>
              <p className="text-[13px] lg:text-[14px]">
                Fast delivery worldwide
              </p>
            </div>
          </div>

          {/* ITEM 4 */}
          <div className="flex items-center gap-4">
            <RiRefund2Line className="text-3xl" />
            <div>
              <h4 className="text-[16px] lg:text-[18px] font-semibold">
                Refunds policy
              </h4>
              <p className="text-[13px] lg:text-[14px]">
                60 days return for any reason
              </p>
            </div>
          </div>

        </div>
      </div>
    </Container>
    </>
  );
};

export default Counter;
