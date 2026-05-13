import React from "react";
import { LuMoveRight } from "react-icons/lu";

const ExploringCard = ({ title, ptitle }) => {
  return (
    <>
      <div className="border border-[#E5E7EB] rounded-2xl p-6 flex sm:items-center justify-between gap-4">

      {/* TEXT */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-primary">
          {title}
        </h3>
        <h4 className="text-[13px] sm:text-[14px] text-secondary">
          {ptitle}
        </h4>
      </div>

      {/* BUTTON */}
      <button className="text-[13px] sm:text-[14px] font-medium uppercase text-secondary flex items-center gap-2 sm:border-l sm:border-[#cecece] sm:pl-3">
        Shop Now <LuMoveRight />
      </button>

    </div>
    </>
  );
};

export default ExploringCard;
