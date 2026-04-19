import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import axios from "axios";
import BreadCrumb from "../Components/BreadCrumb";
import Paginate from "../Components/Paginate";
import Skeliton from "../Components/Skeliton";
import { useDispatch } from "react-redux";
import { categoryReducer, productReducer } from "../Slices/ProductSlice";
import { IoIosCheckbox } from "react-icons/io";

const Shop = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCtegory, setSelectedCategory] = useState([]);

 const dispatch = useDispatch()

  // fetch API
  async function getAllProducts() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setShopProducts(res.data.products);
      dispatch(productReducer(res.data.products))
      setLoading(false);
    } catch (err) {
      console.log("Failed to fetch", err);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(shopProducts.map((items) => items.category)),
    ];
    setCategories(uniqueCategories);
  }, [shopProducts]);

  const handleCategory = (items) => {
    const filterItems = shopProducts.filter(
      (catItems) => catItems.category === items,
    );
    dispatch(categoryReducer(filterItems))
    setSelectedCategory(items)
  };
console.log(shopProducts)
  return (
    <>
      <Container>
        <BreadCrumb />
        <div className=" flex gap-6.25">
          <div className="w-71.25">
            <h4 className="text-[18px] font-semibold text-primary mb-6 mt-9">
              Categories
            </h4>
            <ul className="text-[14px] text-secondary leading-9 border-b-2 pb-6 border-[#e3e5e9] ">
              <li onClick={()=> dispatch(productReducer(shopProducts))} className="cursor-pointer">All Products</li>
              {categories.map((items, idx) => (
                <li
                  onClick={() => handleCategory(items)}
                  key={idx}
                  className="flex items-center gap-3 capitalize cursor-pointer"
                >
                  <div className="w-5 h-5 border rounded flex items-center justify-center">
                    {
                      selectedCtegory === items && <IoIosCheckbox className="w-8 h-8 "/>
                    }
                  </div>
                  <span>{items}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-[18px] font-semibold text-primary mt-8 mb-6">
              Sort order
            </h4>
            <ul className="text-[14px] text-secondary leading-9">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-[#94A3B8]"></div>
                <span>Most Popular</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-[#94A3B8]"></div>
                <span>Best Rating</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-[#94A3B8]"></div>
                <span>Newest</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-[#94A3B8]"></div>
                <span>Price Low - Hight</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded-full border-[#94A3B8]"></div>
                <span>Price Hight - Low</span>
              </li>
            </ul>
          </div>
          <div>
            {loading ? (
              <div className="grid grid-cols-3 gap-5 flex-1">
                <Skeliton />
                <Skeliton />
                <Skeliton />
                <Skeliton />
                <Skeliton />
                <Skeliton />
              </div>
            ) : (
              <Paginate itemsPerPage={6} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
