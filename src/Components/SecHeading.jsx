import React from "react";

const SecHeading = ({title1, title2}) => {
  return (
    <>
       <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-semibold mt-16 sm:mt-20 lg:mt-22 mb-6 sm:mb-8 lg:mb-10 leading-snug px-4 sm:px-0">
      {title1}{" "}
      <span className="text-secondary">{title2}</span>
    </h2>
    </>
  );
};

export default SecHeading;
