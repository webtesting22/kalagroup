import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { url } from "../data/navs";

const carosalimg = [
  {
    link: url.residential_inner,
    image: "/source/images/home8.png",
    lable: "Kala Siddhi",
  },
  {
    link: url.kala_Square,
    image: "/source/images/home1.png",
    lable: "Kala Square",
  },
  {
    link: url.kala_dham,
    image: "/source/images/home2.png",
    lable: "Kala Dham",
  },
  {
    link: url.kala_dham,
    image: "/source/images/home3.png",
    lable: "Kala Dham",
  },
  {
    link: url.kala_kunj,
    image: "/source/images/home4.png",
    lable: "Kala Kunj",
  },
  {
    link: url.kalasagar_skyz,
    image: "/source/images/home5.png",
    lable: "Kalasagar Skyz",
  },
  {
    link: url.kalasagar_skyz,
    image: "/source/images/home6.png",
    lable: "Kalasagar Skyz",
  },
  {
    link: url.kalasagar_skies,
    image: "/source/images/home7.png",
    lable: "Kalasagar skies",
  },
  {
    link: url.kalatirth_premium,
    image: "/source/images/home9.png",
    lable: "Kalatirth Premium",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="banner extra-margin">
        <Carousel onTouchMove pause="hover" variant="dark">
          {carosalimg.map((value, key) => {
            return (
              <Carousel.Item interval={2000} key={key}>
                <img
                  onClick={() => {
                    navigate(value.link);
                  }}
                  className="d-block w-100 same-height"
                  src={value.image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="text-white">{value.lable}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
};

export default Home;
