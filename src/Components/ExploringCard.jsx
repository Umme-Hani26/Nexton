import React from "react";
import { LuMoveRight } from "react-icons/lu";

const ExploringCard = ({ title, ptitle }) => {
  return (
    <>
      <div className="flex items-center gap-14.5 border px-10 py-10 border-[#E5E7EB] rounded-2xl mb-10">
        <div className="w-41.25">
          <h3 className="text-2xl font-semibold text-primary">{title}</h3>
          <h4 className="text-[14px] text-secondary">{ptitle}</h4>
        </div>
        <div className="w-28.25">
          <button className="text-[14px] font-medium uppercase text-secondary flex items-center gap-1.5 border-l-2 border-[#cecece] pl-3">
            Shop Now <LuMoveRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default ExploringCard;
