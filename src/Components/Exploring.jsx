import React from "react";
import Container from "./Container";
import SecHeading from "./SecHeading";
import ExploringCard from "./ExploringCard";
import Flex from "./Flex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Exploring = () => {
  const data = [
    {
      id: 1,
      title: "For Men's",
      ptitle: "Starting at $24",
    },
    {
      id: 2,
      title: "For Women's",
      ptitle: "Starting at $19",
    },
    {
      id: 3,
      title: "Accessories",
      ptitle: "Explore accessories",
    },
    {
      id: 4,
      title: "Accessories",
      ptitle: "Explore accessories",
    },
    {
      id: 5,
      title: "For Women's",
      ptitle: "Starting at $19",
    },
    {
      id: 6,
      title: "Accessories",
      ptitle: "Explore accessories",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Container>
        <SecHeading
          title1="Start exploring."
          title2="Good things are waiting for you"
        />

        <Slider {...settings}>
          {
            data.map((item) => (
              <div key={item.id} className="px-2">
              <ExploringCard
              title = {item.title}
              ptitle = {item.ptitle}
              />
              </div>

            ))
          }
        </Slider>
      </Container>
    </>
  );
};

export default Exploring;
