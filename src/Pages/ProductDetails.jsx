import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import { FaStar } from "react-icons/fa6";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import Flex from "../Components/Flex";
import ProductsCard from "../Components/ProductsCard";
import Products from "../Components/Products";
import axios from "axios";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  cartReducer,
  incrementReducer,
  decrementReducer,
} from "../Slices/ProductSlice";

const ProductDetails = () => {
  let { id } = useParams();

  const [shopProducts, setShopProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [productReview, setProductReview] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // ✅ FIXED: use stable id, not shopProducts.id
  const cartItem = useSelector((state) =>
    state.Allproducts.cart.find((item) => item.id === Number(id)),
  );

  const handleAddToCart = () => {
    if (!cartItem) {
      dispatch(
        cartReducer({
          ...shopProducts,
          Quantity: 1,
        }),
      );

      toast.success("Successfully added to cart 🛒");
    } else {
      toast.warn("Already in cart ⚠️");
    }
  };
  const quantity = cartItem?.Quantity || 1;

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setShopProducts(res.data);
        setImages(res.data.images);
        setProductReview(res.data.reviews);
        const recRes = await axios.get("https://dummyjson.com/products");

        setRecommendations(recRes.data.products);
      } catch (err) {
        console.log("Failed to fetch", err);
      }
    };
    getAllProducts();
  }, [id]);
  const dispatch = useDispatch();

  // ✅ INCREMENT
  const handleIncrement = () => {
    dispatch(incrementReducer(Number(id)));
  };

  // ✅ DECREMENT
  const handleDecrement = () => {
    dispatch(decrementReducer(Number(id)));
  };

  const price = shopProducts?.price || 0;
  const discount = shopProducts?.discountPercentage || 0;

  const originalPrice = (price / (1 - discount / 100)).toFixed(2);
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <div>
      <Container>
        <BreadCrumb />

        <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full lg:w-[60%] border-b pb-8 lg:pb-13 border-[#e0e0e0]">
            <Flex className="w-full sm:w-24 lg:w-35 flex-row lg:flex-col gap-2 lg:gap-4 ">
              {images.map((item, idx) => (
                <img key={idx} src={item} alt="" />
              ))}
            </Flex>
            <div>
              <img
                src={shopProducts.thumbnail}
                alt=""
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] border p-4 sm:p-6 lg:p-8 rounded-3xl border-[#efefef]">
            <div className="flex justify-between gap-4">
              <div className="flex gap-1 items-center">
                <FaStar className="text-[#FBBF24]" />
                <h4 className="text-[16px] font-medium text-secondary">
                  ({productReview.length}) Reviews
                </h4>
              </div>
              <div className="flex flex-col items-end">
                <h4 className="text-[24px] font-semibold text-primary">
                  ${price}
                </h4>
                <h4 className="text-[14px] font-medium line-through text-secondary">
                  ${originalPrice}
                </h4>
              </div>
            </div>
          <div>
  <h4 className="text-[16px] font-semibold text-primary mt-8">
    Size: S
  </h4>

  <div className="flex flex-wrap gap-3 mt-3">
    
    <h4 className="py-2.5 px-6 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white rounded-2xl text-[16px] font-semibold flex justify-center cursor-pointer">
      S
    </h4>

    <h4 className="py-2.5 px-6 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white rounded-2xl text-[16px] font-semibold flex justify-center cursor-pointer">
      M
    </h4>

    <h4 className="py-2.5 px-6 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white rounded-2xl text-[16px] font-semibold flex justify-center cursor-pointer">
      L
    </h4>

    <h4 className="py-2.5 px-6 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white rounded-2xl text-[16px] font-semibold flex justify-center cursor-pointer">
      XL
    </h4>

    <h4 className="py-2.5 px-6 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white rounded-2xl text-[16px] font-semibold flex justify-center cursor-pointer">
      2XL
    </h4>

  </div>
</div>
            <div className="mt-8 flex items-center">
              <div className="px-3 py-2 bg-[#f3f3f3] w-27.5 rounded-full flex justify-between items-center">
                <h4 className="w-6 h-6 rounded-full  flex items-center justify-center bg-white border border-[#d6d6d6]">
                  <AiOutlineMinus onClick={handleDecrement} />
                </h4>
                <h4 className="text-[16px] font-medium text-secondary">
                  {" "}
                  {quantity}
                </h4>
                <h4 className="w-6 h-6 rounded-full  flex items-center justify-center bg-white border border-[#d6d6d6]">
                  <AiOutlinePlus onClick={handleIncrement} />
                </h4>
              </div>
              <div className="px-8 py-4.5 rounded-full bg-primary w-44.5 flex items-center justify-center gap-2">
                <RiShoppingBag4Line className="text-white" />

                <button
                  className="text-white text-[16px] font-medium"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="mt-8 ">
              <div className="flex justify-between">
                <h4 className="text-[16px] text-secondary">
                  ${price} x {quantity}
                </h4>
                <h4 className="text-[16px] text-secondary">${totalPrice}</h4>
              </div>
              <div className="flex justify-between border-b border-[#dfdfdf] pb-4">
                <h4 className="text-[16px] text-secondary">Tax estimate</h4>
                <h4 className="text-[16px] text-secondary">$0</h4>
              </div>
              <div className="flex justify-between mt-4">
                <h4 className="text-[16px] font-semibold text-primary">
                  Total
                </h4>
                <h4 className="text-[16px] font-semibold text-primary">
                  ${totalPrice}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full lg:w-[75%] mt-10 lg:mt-13 mb-10 lg:mb-15">
            <h4 className="text-4xl font-semibold text-primary mb-4">
              {shopProducts.title}
            </h4>
            <p className="text-[16px] text-secondary">
              {shopProducts.description}
            </p>
          </div>
          <div className="w-full lg:w-[75%] mt-10 lg:mt-13 mb-10 lg:mb-15">
            <h4 className="text-4xl font-semibold text-primary mb-4">
              Fabric + Care
            </h4>
            <p className="text-[16px] text-secondary">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
          </div>
          <div className="w-full lg:w-[75%] mt-10 lg:mt-13 mb-10 lg:mb-15">
            <h4 className="text-4xl font-semibold text-primary mb-4">
              Sale performance
            </h4>
            <p className="text-[16px] text-secondary">
              The St. Louis Meramec Canoe Company was founded by Alfred Wickett
              in 1922. Wickett had previously worked for the Old Town Canoe Co
              from 1900 to 1914. Manufacturing of the classic wooden canoes in
              Valley Park, Missouri ceased in 1978.
            </p>
          </div>
          <div>
            <div className="w-full lg:w-[75%] mt-10 lg:mt-13 mb-10 lg:mb-15">
              <h4 className="text-4xl font-semibold text-primary mb-4">
                Keywords
              </h4>
            </div>
            <div className="flex gap-2">
              <div className="px-3.5 py-2 border rounded-full border-[#efefef] flex items-center justify-center">
                <BsStars />
                <h4 className="text-[12px] text-secondary">men's fashion</h4>
              </div>
              <div className="px-3.5 py-2 border rounded-full border-[#efefef] flex items-center justify-center">
                <BsStars />
                <h4 className="text-[12px] text-secondary">winter hat</h4>
              </div>
              <div className="px-3.5 py-2 border rounded-full border-[#efefef] flex items-center justify-center">
                <BsStars />
                <h4 className="text-[12px] text-secondary">
                  colorful accessory
                </h4>
              </div>
              <div className="px-3.5 py-2 border rounded-full border-[#efefef] flex items-center justify-center">
                <BsStars />
                <h4 className="text-[12px] text-secondary">warm headwear</h4>
              </div>
            </div>
          </div>
        </div>

        <Products title1="Recommended products" data={recommendations} />
      </Container>
    </div>
  );
};

export default ProductDetails;
