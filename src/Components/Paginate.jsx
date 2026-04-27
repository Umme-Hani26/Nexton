import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductsCard from "./ProductsCard";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useSelector } from "react-redux";

const Paginate = ({ itemsPerPage }) => {
  const productItem = useSelector((state) => state.Allproducts.value);

  const items = productItem || [];

  function Items({ currentItems }) {
    return (
      <div className="grid grid-cols-3 gap-5 flex-1">
        {currentItems &&
          currentItems.map((item) => (
            <ProductsCard
              key={item.id}
              id={item.id}
              productData={item}
              image={item.thumbnail}
              title={item.title}
              price={item.price}
              category={item.category}
              oldPrice={(
                item.price /
                (1 - item.discountPercentage / 100)
              ).toFixed(2)}
              rating={item.rating}
              rvw={item.reviews.length}
              discount={item.discountPercentage}
            />
          ))}
      </div>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdOutlineNavigateNext size={29} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<GrFormPrevious size={27} />}
        renderOnZeroPageCount={null}
        pageClassName="px-4 py-1 bg-[#E5E7EB] h-8 flex items-center justify-center rounded"
        className="flex gap-2 cursor-pointer"
        previousClassName="flex items-center justify-center h-8"
        nextClassName="flex items-center justify-center h-8"
      />
    </>
  );
};

export default Paginate;
