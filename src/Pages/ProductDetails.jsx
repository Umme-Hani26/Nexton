import React, { useEffect, useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import watchimage from "../assets/watchimage.png";
import { FaStar } from "react-icons/fa6";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import Flex from "../Components/Flex";
import watch from "../assets/watch.png";
import ProductsCard from "../Components/ProductsCard";
import Products from "../Components/Products";
import axios from "axios";
import { useParams } from "react-router";
const ProductDetails = () => {
  let { id } = useParams();

  const [shopProducts, setShopProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [productReview, setProductReview] = useState([]);
  console.log(shopProducts);
  async function getAllProducts() {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setShopProducts(res.data);
      setImages(res.data.images);
      setProductReview(res.data.reviews);
    } catch (err) {
      console.log("Failed to fetch", err);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const recommendations = [
    {
      id: 1,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 2,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 3,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 4,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
    {
      id: 5,
      image: watch,
      title: "Black Automatic Watch",
      price: "169.99",
      category: "Accessories",
      oldPrice: "199.99",
      rating: "4.9",
      rvw: "98",
      discount: 50,
    },
  ];

  return (
    <div>
      <Container>
        <BreadCrumb />

        <div className="mt-10 flex gap-8 items-start">
          <div className="flex gap-6 w-201 border-b pb-13 border-[#e0e0e0]">
            <Flex className="w-35 flex-col gap-4 ">
              {images.map((item, idx) => (
                <img key={idx} src={item} alt="" />
              ))}
            </Flex>
            <div>
              <img
                src={shopProducts.thumbnail}
                alt=""
                className="rounded-3xl w-160"
              />
            </div>
          </div>
          <div className="border p-8.25 rounded-3xl border-[#efefef]">
            <div className="flex gap-36.5">
              <div className="flex gap-1 items-center">
                <FaStar className="text-[#FBBF24]" />
                <h4 className="text-[16px] font-medium text-secondary">
                  ({productReview.length}) Reviews
                </h4>
              </div>
              <div className="flex flex-col items-end">
                <h4 className="text-[24px] font-semibold text-primary">
                  ${shopProducts.price}
                </h4>
                <h4 className="text-[14px] font-medium line-through text-secondary">
                  $ {(shopProducts.price /
                    (1 - shopProducts.discountPercentage / 100)).toFixed(2)}
                </h4>
              </div>
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-primary mt-8">
                Size: S
              </h4>
              <div className="flex">
                <h4 className="py-2.5 px-7.75 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white w-18 rounded-2xl text-[16px] font-semibold mt-3 flex justify-center">
                  S
                </h4>
                <h4 className="py-2.5 px-7.75 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white w-18 rounded-2xl text-[16px] font-semibold mt-3 flex justify-center">
                  M
                </h4>
                <h4 className="py-2.5 px-7.75 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white w-18 rounded-2xl text-[16px] font-semibold mt-3 flex justify-center">
                  L
                </h4>
                <h4 className="py-2.5 px-7.75 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white w-18 rounded-2xl text-[16px] font-semibold mt-3 flex justify-center">
                  XL
                </h4>
                <h4 className="py-2.5 px-7.75 border border-[#efefef] hover:bg-[#0EA5E9] hover:text-white w-18 rounded-2xl text-[16px] font-semibold mt-3 flex justify-center">
                  2XL
                </h4>
              </div>
            </div>
            <div className="mt-8 flex items-center">
              <div className="px-3 py-2 bg-[#f3f3f3] w-27.5 rounded-full flex justify-between items-center">
                <h4 className="w-6 h-6 rounded-full  flex items-center justify-center bg-white border border-[#d6d6d6]">
                  <AiOutlineMinus />
                </h4>
                <h4 className="text-[16px] font-medium text-secondary">1</h4>
                <h4 className="w-6 h-6 rounded-full  flex items-center justify-center bg-white border border-[#d6d6d6]">
                  <AiOutlinePlus />
                </h4>
              </div>
              <div className="px-8 py-4.5 rounded-full bg-primary w-44.5 flex items-center justify-center gap-2">
                <RiShoppingBag4Line className="text-white" />
                <h4 className="text-white text-[16px] font-medium">
                  Add to cart
                </h4>
              </div>
            </div>
            <div className="mt-8 ">
              <div className="flex justify-between">
                <h4 className="text-[16px] text-secondary">$169.99 x 1</h4>
                <h4 className="text-[16px] text-secondary">$169.99</h4>
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
                  $169.99
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-183.75 mt-13 mb-15">
            <h4 className="text-4xl font-semibold text-primary mb-4">
              {shopProducts.title}
            </h4>
            <p className="text-[16px] text-secondary">
              {shopProducts.description}
            </p>
          </div>
          <div className="w-183.75 mt-13 mb-15">
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
          <div className="w-183.75 mt-13 mb-15">
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
            <div className="w-183.75 mt-13">
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
