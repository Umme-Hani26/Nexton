import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import ProductsCard from "./ProductsCard";
import Slider from "react-slick";

const Products = ({ title1, title2, data = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container className="mt-22">
        <SecHeading title1={title1} title2={title2} />

        <Slider {...settings}>
          {data.map((item) => (
             
            <div key={item.id} className="justify-center px-2">
              <ProductsCard
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                category={item.category}
                oldPrice={item.oldPrice}
                rating={item.rating}
                rvw={item.rvw}
                discount={item.discount}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Products;
