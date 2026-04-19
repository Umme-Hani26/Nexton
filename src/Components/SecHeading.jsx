import React from "react";

const SecHeading = ({title1, title2}) => {
  return (
    <>
      <h2 className="text-primary text-[36px] font-semibold mt-22 mb-10">
        {title1} <span className="text-secondary">{title2}</span>
      </h2>
    </>
  );
};

export default SecHeading;
