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
        {/* FOOTER TOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-15 mb-15 px-4 sm:px-0">
          {/* LOGO + SOCIAL */}
          <div>
            <img src={logo} alt="logo" className="w-28 sm:w-30 h-auto" />

            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:text-[16px] text-secondary">
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

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-[16px] font-semibold text-primary">
              Getting started
            </h4>

            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:text-[16px] text-secondary">
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-[16px] font-semibold text-primary">Explore</h4>

            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:text-[16px] text-secondary">
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="text-[16px] font-semibold text-primary">
              Community
            </h4>

            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:text-[16px] text-secondary">
              <li>Discussion Forums</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>
        </div>
      </Container>
      <h4 className="flex items-center justify-center text-center text-[14px] sm:text-[16px] text-secondary border-t border-[#efefef] pt-4 pb-7 px-4">
        Nexton eCommerce. © 2024
      </h4>
    </>
  );
};

export default Footer;
