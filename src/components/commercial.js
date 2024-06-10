import React from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { url } from "../data/navs";

const Commercial = () => {
  return (
    <>
      <section id="ongoing_commercial" className="extra-margin">
        <div className="section_padding"></div>
        <div class="container">
          <div className="section_padding"></div>
          <h3 class="section-title text-center mb-lg-4 mb-3 brown-color">
            ONGOING PROJECTS
          </h3>

          <div class="pt-lg-3 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.residential_inner}>
                  <h3 className="section-title brown-color font-cinzel">
                    KALA SIDDHI
                  </h3>
                </Link>
                <a
                  href="https://www.google.co.in/maps/place/KALA+SIDDHI/@23.0292109,72.5602174,17z/data=!3m1!4b1!4m5!3m4!1s0x395e851f60eed621:0x4fdb2759a920839c!8m2!3d23.029206!4d72.5624061"
                  target="blank"
                >
                  <GrLocation className="brown-color fw-bold" />
                  &nbsp;&nbsp;LAW GARDEN
                </a>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 4BHK</span> LUXURY,
                  LAVISH LIVING
                </h5>
                <p className="justify">
                  Lavish residential places where joy erupts straight from the
                  heart. Modern and poised for exploration, it’s a building
                  unlike any other in the neighborhood. Life nestles at the
                  heart of a setting renowned for its culture, cosmopolitanism
                  and exclusivity. Dive in the world of lavish living at&nbsp;
                  <Link
                    to={url.residential_inner}
                    className="brown-color fw-bold"
                  >
                    KALA SIDDHI
                  </Link>
                  .
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto text-center">
                <div>
                  <Link to={url.residential_inner}>
                    <img
                      src="/source/images/kala-siddhi.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-lg-5 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 m-auto d-md-block d-none text-center">
                <div>
                  <Link to={url.kalasagar_skies}>
                    <img
                      src="./source/images/Kalasagar.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kalasagar_skies}>
                  <h3 className="section-title brown-color">KALASAGAR SKIES</h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.com/maps/place/KALASAGAR+SKIES+APPARTMENT/@23.1175006,72.4626882,12z/data=!4m9!1m2!2m1!1skala+skies+chandkheda!3m5!1s0x395e833336b979ed:0xd4c5273ff5fe9707!8m2!3d23.1175006!4d72.6027639!15sChVrYWxhIHNraWVzIGNoYW5ka2hlZGGSARJhcGFydG1lbnRfYnVpbGRpbmc"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> CHANDKHEDA , MOTERA
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 2BHK</span> PREMIUM
                  APARTMENTS
                </h5>
                <p className="justify">
                  A world within itself. This project of ours has more amenities
                  than you can think of. Stylish, contemporary design with a
                  pinch our Kala trademark here and there. We bring you one of
                  the first high rise towers of the area{" "}
                  <Link
                    className="brown-color fw-bold"
                    to={url.kalasagar_skies}
                  >
                    KALASAGAR SKIES&nbsp;
                  </Link>
                  - 2BHK Premium apartments where Luxury & Grandeur comes cheap.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-lg-none d-md-none d-block text-center">
                <div>
                  <Link to={url.kalasagar_skies}>
                    <img
                      src="./source/images/Kalasagar.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Commercial;
