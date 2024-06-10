import React from "react";
import { Link } from "react-router-dom";
import { url } from "../data/navs";
import { GrLocation } from "react-icons/gr";

const Residential = () => {
  return (
    <>
      <section id="ongoing" className="section_padding">
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
                  <Link to={url.kala_Samartheshwar}>
                    <img
                      src="./source/images/kalasamartheshwar.png"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kala_Samartheshwar}>
                  <h3 className="section-title brown-color">
                    KALA SAMARTHESHWAR{" "}
                  </h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.co.in/maps/place/Kala+Samartheshwar/@23.0189305,72.5539151,17z/data=!3m1!4b1!4m5!3m4!1s0x395e85f5ac4c58ad:0x849932807b8fb924!8m2!3d23.0189256!4d72.5561038"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> Parimal Garden
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 4BHK</span> WORLD CLASS
                  ABODES
                </h5>

                <p className="justify pt-3">
                  Our Group's First Redevelopment Project. Right in the heart of
                  the city near the well-connected Central Business District
                  (CBD). 4 BHK High end premium apartments with
                  <Link
                    to={url.kala_Samartheshwar}
                    className="brown-color fw-bold"
                  >
                    {" "}
                    world class amenities
                  </Link>
                  . A complete package in itself. Crafting the old pieces into a
                  new master piece.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-md-none d-block text-center">
                <div>
                  <Link to={url.kala_Samartheshwar}>
                    <img
                      src="./source/images/kalasamartheshwar.png"
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
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kalasagar_skyz}>
                  <h3 className="section-title brown-color">KALASAGAR SKYZ</h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.com/maps/place/Kalasagar+Skyz/@23.0034064,72.5215434,17z/data=!3m1!4b1!4m5!3m4!1s0x395e852c5e8f7b91:0xdee70e386448596c!8m2!3d23.0034133!4d72.5237341"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> VEJALPUR (SOUTH
                    SATELLITE)
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 2BHK</span> EXCLUSIVE
                  APARTMENTS
                </h5>
                <p className="justify">
                  Presenting to you
                  <Link className="brown-color fw-bold" to={url.kalasagar_skyz}>
                    &nbsp;KALASAGAR SKYZ&nbsp;
                  </Link>
                  - Where Families rediscover Joy, Happiness. This Kala Master
                  piece is the newest building in the region &amp; the most
                  spacious of them all. With Amenities that lure you to stay
                  home, we welcome you to Paradise.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-md-block d-none text-center">
                <div>
                  <Link to={url.kalasagar_skyz}>
                    <img
                      src="./source/images/kalasagarskyz.png"
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

      <section id="upcoming">
        <div className="section_padding"></div>
        <div className="container">
          <h1 className="section-title text-center mb-lg-4 mb-3 brown-color">
            UPCOMING PROJECTS
          </h1>
          <div class="pt-lg-3 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 m-auto d-md-block d-none text-center">
                <div>
                  <Link to={url.formss}>
                    <img
                      src="/source/images/SHAHIBAUG.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.formss}>
                  <h3 className="section-title brown-color">SHAHIBAUG</h3>
                </Link>
                <div className="sub-title">
                  <GrLocation className="brown-color" /> SHAHIBAUG
                </div>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-md-none d-block text-center">
                <div>
                  <Link to={url.formss}>
                    <img
                      src="/source/images/SHAHIBAUG.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="pt-lg-5 mt-lg-3 pt-3 mt-3">
            <div className="row">
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
              <div className="col-md-6 col-lg-6 m-auto d-block text-center">
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

      <section id="completed">
        <div className="section_padding"></div>
        <div className="container">
          <h1 className="section-title text-center mb-lg-4 mb-3 brown-color">
            COMPLETED PROJECTS
          </h1>

          <div className="pt-lg-3 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 m-auto d-md-block d-none text-center">
                <div>
                  <Link to={url.kalatirth_premium}>
                    <img
                      src="./source/images/Kalatirth_Premium-4.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kalatirth_premium}>
                  <h3 className="section-title brown-color">
                    KALATIRTH PREMIUM
                  </h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.com/maps/place/Kalatirth+Premium/@23.098789,72.5924983,17z/data=!3m1!4b1!4m5!3m4!1s0x395e83f08b00b43b:0xf9f736c6b4de8ebb!8m2!3d23.098789!4d72.594687"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> MOTERA
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 4BHK</span> IMPERIAL
                  LIVING
                </h5>
                <p className="justify">
                  Coming Home is not just about a place, but about experiencing
                  most amazing and Joyful feeling in the world. Presenting&nbsp;
                  {/* <a
                    href="/src/components/residential_inner.js"
                    className="brown-color fw-bold"
                  > */}
                  <Link
                    className="brown-color fw-bold"
                    to={url.kalatirth_premium}
                  >
                    KALATIRTH PREMIUM
                  </Link>
                  , a home you will absolutely be proud to own and flaunt.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-lg-none d-md-none d-block text-center">
                <div>
                  <Link to={url.kalatirth_premium}>
                    <img
                      src="./source/images/Kalatirth_Premium-4.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-lg-5 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kala_kunj}>
                  <h3 className="section-title brown-color">KALA KUNJ</h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://goo.gl/maps/zYZHr2hTg9RcSDRr5"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> PALDI
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 3BHK </span>
                  ELEGANT, UNIQUE LIVING
                </h5>
                <p className="justify">
                  Welcome to
                  <Link className="brown-color fw-bold" to={url.kala_kunj}>
                    &nbsp;KALA KUNJ.&nbsp;
                  </Link>
                  Homes, where families can rediscover the joy of togetherness
                  and of spending precious time with each other without having
                  to travel afar. All modern convenience is made available to
                  the residents.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-block text-center">
                <div>
                  <Link to={url.kala_kunj}>
                    <img
                      src="./source/images/kalakunj.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
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
                  <Link to={url.kala_dham}>
                    <img
                      src="./source/images/Kaladham -6.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kala_dham}>
                  <h3 className="section-title brown-color">KALA DHAM </h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.com/maps/place/KALADHAM/@23.1157587,72.6002582,17z/data=!3m1!4b1!4m5!3m4!1s0x395e836dcc3aa079:0x86c3b33f041a79bb!8m2!3d23.1157567!4d72.6024375"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> MOTERA
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 2BHK</span> PREMIUM
                  APARTMENTS
                </h5>
                <p className="justify">
                  Presenting{" "}
                  <Link to={url.kala_dham} className="brown-color fw-bold">
                    Kala Dham
                  </Link>
                  &nbsp;- Your own paradise where you live and love every single
                  moment of your life . It is an architectural masterpiece
                  attaining a delicate balance between style and opulence.
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-md-none d-block text-center">
                <div>
                  <Link to={url.kala_dham}>
                    <img
                      src="./source/images/Kaladham -6.png"
                      alt=""
                      className="img-fluid mb-4 mb-lg-0"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-lg-5 mt-lg-3 pt-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-lg-6 my-auto">
                <Link to={url.kala_Square}>
                  <h3 className="section-title brown-color">KALA SQUARE</h3>
                </Link>
                <div className="sub-title">
                  <a
                    href="https://www.google.com/maps/place/Kala+Square/@23.0161565,72.5566635,17z/data=!4m9!1m2!2m1!1skala+square+Opp.+Upvan+Apartment,+Parimal+under+Pass,+C.G.+Road,+Ahmedabad+%E2%80%93+380007%E2%80%9D!3m5!1s0x395e84fd75d7f437:0x2254893890f8cc6d!8m2!3d23.0161248!4d72.5588638!15sClhrYWxhIHNxdWFyZSBPcHAuIFVwdmFuIEFwYXJ0bWVudCwgUGFyaW1hbCB1bmRlciBQYXNzLCBDLkcuIFJvYWQsIEFobWVkYWJhZCDigJMgMzgwMDA34oCdkgESYXBhcnRtZW50X2J1aWxkaW5n"
                    target="blank"
                  >
                    <GrLocation className="brown-color" /> PARIMAL GARDEN
                  </a>
                </div>
                <h5 className="s-title pb-3 text-secondary">
                  <span className="s-color brown-color"> 4BHK</span> SUPERLATIVE
                  LIFESTYLE HOME
                </h5>
                <p className="justify">
                  If space is the ultimate luxury in Ahmedabad, 40 residents are
                  about to discover its true meaning. Here, space abounds
                  everywhere. A home you'll be proud to call your own:
                  <Link to={url.kala_Square} className="brown-color fw-bold">
                    &nbsp;KALA SQUARE.
                  </Link>
                </p>
              </div>
              <div className="col-md-6 col-lg-6 m-auto d-md-block d-block text-center">
                <div>
                  <Link to={url.kala_Square}>
                    <img
                      src="./source/images/kalasquare.png"
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

export default Residential;
