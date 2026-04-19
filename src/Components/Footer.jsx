import React from "react";
import logo from "../assets/logo.png";
import Container from "./Container";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="flex gap-5 mb-15">
          <div className="mb-5 mt-15 w-77.25">
            <img src={logo} alt="" className="w-29.75 h-12" />
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-secondary">
              <li className="flex items-center gap-2">
                <FaFacebook className="text-[#4676ED]" />
                Facebook
              </li>
              <li className="flex items-center gap-2">
                <BsYoutube className="text-[#ff0000]" />
                Youtube
              </li>
              <li className="flex items-center gap-2">
                <FaTelegram className="text-[#4676ED]" />
                Telegram
              </li>
              <li className="flex items-center gap-2">
                <AiFillTwitterCircle className="text-[#4676ED]" />
                Twitter
              </li>
            </ul>
          </div>

          <div className="mb-5 mt-15 w-77.25">
            <h4 className="text-[16px] font-semibold text-primary">
              Getting started
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-secondary">
              <li className="flex items-center gap-2 ">Release Notes</li>
              <li className="flex items-center gap-2">Upgrade Guide</li>
              <li className="flex items-center gap-2">Browser Support</li>
              <li className="flex items-center gap-2">Dark Mode</li>
            </ul>
          </div>

          <div className="mb-5 mt-15 w-77.25">
            <h4 className="text-[16px] font-semibold text-primary">Explore</h4>
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-secondary">
              <li className="flex items-center gap-2 ">Prototyping</li>
              <li className="flex items-center gap-2">Design systems</li>
              <li className="flex items-center gap-2">Pricing</li>
              <li className="flex items-center gap-2">Security</li>
            </ul>
          </div>

          <div className="mb-5 mt-15 w-77.25">
            <h4 className="text-[16px] font-semibold text-primary">
              Community
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-[16px] text-secondary">
              <li className="flex items-center gap-2 ">Discussion Forums</li>
              <li className="flex items-center gap-2">Upgrade Guide</li>
              <li className="flex items-center gap-2">Browser Support</li>
              <li className="flex items-center gap-2">Dark Mode</li>
            </ul>
          </div>
        </div>
      </Container>
          <h4 className="flex items-center justify-center text-secondary border-t border-[#efefef] pt-3.75 pb-7.5">Nexton eCommerce. © 2024</h4>
     
      
    </>
  );
};

export default Footer;
