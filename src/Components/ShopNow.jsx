import React from "react";
import shopnow from "../assets/banner-container.png";
import Container from "./Container";
import { Link } from "react-router";

const ShopNow = () => {
  return (
    <>
      <Container>
        <div className="mt-35 mb-13">
          <Link to="/shop" end>
            <img
              src={shopnow}
              alt=""
              className="h-109.25 w-full object-cover"
            />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default ShopNow;
