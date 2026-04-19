import React from "react";
import Hero from "../assets/hero.png";
import Container from "./Container";
import { CiSearch } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          style={{ margin: "0px" }}
          className="absolute -top-16 left-[50%] -translate-x-1/2"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-[#232529]"></div>
    ),
  };
  return (
    <>
      <div className="overflow-hidden">
        <Slider {...settings}>
          <div className="relative">
            <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
            <Container>
              <div className="absolute top-[50%] -translate-y-1/2 ">
                <h4 className="text-[20px] font-medium">
                  Starting from: $49.99
                </h4>
                <h1 className="mt-6 mb-6 w-158 text-[64px] font-semibold leading-18">
                  Exclusive collection for everyone
                </h1>
                <div className="w-49.5 h-16 bg-[#111827] rounded-full text-white flex items-center justify-center gap-2.5">
                  <button className="text-[16px] font-medium">
                    Explore now
                  </button>
                  <CiSearch className="text-[18px]" />
                </div>
              </div>
            </Container>
          </div>

          <div className="relative">
            <img src={Hero} alt="Hero" className="w-full h-full object-cover" />
            <Container>
              <div className="absolute top-[50%] -translate-y-1/2 ">
                <h4 className="text-[20px] font-medium">
                  Starting from: $49.99
                </h4>
                <h1 className="mt-6 mb-6 w-158 text-[64px] font-semibold leading-18">
                  Exclusive collection for everyone
                </h1>
                <div className="w-49.5 h-16 bg-[#111827] rounded-full text-white flex items-center justify-center gap-2.5">
                  <button className="text-[16px] font-medium">
                    Explore now
                  </button>
                  <CiSearch className="text-[18px]" />
                </div>
              </div>
            </Container>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
