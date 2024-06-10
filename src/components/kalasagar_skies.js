import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import {
  GiBeachBall,
  GiBusStop,
  GiCctvCamera,
  GiGrass,
  GiHouse,
  GiParkBench,
  GiRoad,
  GiSolarPower,
  GiTreeSwing,
} from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import {
  MdElectricalServices,
  MdOutlineMeetingRoom,
  MdOutlineSecurity,
  MdSchool,
  MdSportsTennis,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";

import { GiRailRoad } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { FaChess } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
// import { ImagePreview } from "./ImagePreview";

const plans = [
  "FIRST BASEMENT PLAN",
  "SECOND BASEMENT PLAN",
  "GROUND FLOOR PLAN",
  "TYPICAL FLOOR PLAN",
  "TYPICAL UNIT PLAN",
];

const carosalimginner = [
  "/source/images/Skies1.png",
  "/source/images/Skies2.png",
  "/source/images/Skies3.png",
  "/source/images/Skies4.png",
  "/source/images/Skies5.png",
  "/source/images/Skies6.png",
  "/source/images/galleryskies1.png",
  "/source/images/galleryskies2.png",
  "/source/images/galleryskies3.png",
  "/source/images/galleryskies4.png",
  "/source/images/galleryskies5.png",
  "/source/images/galleryskies6.png",
  "/source/images/galleryskies7.png",
  "/source/images/galleryskies8.png",
  "/source/images/galleryskies9.png",
  "/source/images/galleryskies10.png",
  "/source/images/galleryskies11.png",
  "/source/images/galleryskies13.png",
  "/source/images/galleryskies14.png",
];

const gallery_skies = [
  "/source/images/pgalleryskies1.png",
  "/source/images/pgalleryskies2.png",
  "/source/images/pgalleryskies3.png",
  "/source/images/pgalleryskies4.png",
  "/source/images/pgalleryskies5.png",
  "/source/images/pgalleryskies6.png",
  "/source/images/pgalleryskies7.png",
  "/source/images/pgalleryskies8.png",
  "/source/images/pgalleryskies9.png",
  "/source/images/pgalleryskies10.png",
  "/source/images/pgalleryskies11.png",
  "/source/images/pgalleryskies13.png",
  "/source/images/pgalleryskies14.png",
  "/source/images/pgalleryskies12.png",
];

const constructionskies = [
  "/source/images/const_skies1.png",
  "/source/images/const_skies3.png",
  "/source/images/const_skies2.png",
  "/source/images/const_skies4.png",
  "/source/images/const_skies5.png",
];

const planskiesImages = [
  "/source/images/skiesplan1.png",
  "/source/images/skiesplan2.png",
  "/source/images/skiesplan3.png",
  "/source/images/skiesplan4.png",
  "/source/images/skiesplan5.png",
];

const Kalasagarskies = () => {
  const [index, setindex] = React.useState(1);
  const [showGalleryCarousel, setShowGalleryCarousel] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const [showPlanCarousel, setShowPlanCarousel] = useState(false);
  const [planActiveIndex, setPlanActiveIndex] = useState(1);

  const width = window.innerWidth;
  return (
    <>
      <section className="residential_banner">
        <div className="container">
          <h3 className="section-title text-center mb-lg-5 pt-lg-3 mt-lg-5 pt-md-3 mt-md-5 pt-3 mb-3 mt-5 px-4 brown-color fs-1">
            KALASAGAR SKIES @ CHANDKHEDA
          </h3>
          <Carousel onTouchMove pause={false} variant="dark">
            {carosalimginner.map((value, key) => {
              return (
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100 same-height"
                    src={value}
                    alt="First slide"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>

      <section className="residential_project_story">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-3 mt-3 brown-color">
            PROJECT STORY
          </h3>
          <div className="row">
            <div className="col-lg-1 col-sm-0"></div>
            <div className="col-lg-10 col-sm-12 text-center">
              <p>
                A world within itself. This project of ours has more amenities
                than you can think of. Stylish, contemporary design with a pinch
                our Kala trademark here and there. We bring you one of the first
                high rise towers of the area
                <span className="brown-color project_story">
                  &nbsp;KALASAGAR SKIES&nbsp;
                </span>
                is a picture perfect place to start of your new life - The life
                of Luxury and Grandeur
              </p>

              <a
                href="/Kalasagar Skies @ Chandkheda - Brocher.pdf"
                download={true}
                target="_blank"
              >
                <BrochureButton />
              </a>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="rera_details">
        <div className="section_padding"></div>
        <div className="container">
          <div className="d-lg-block d-md-block d-none">
            <h3 className="section-title text-center mb-5 mt-3 brown-color">
              RERA DETAILS
            </h3>
            <p className="text-center">
              <span className="fw-bold">Rera No.</span> :
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08533/010621
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center ">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>LAW GARDEN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typology</td>
                    <td>Residential & Commercial</td>
                  </tr>
                  <tr>
                    <td>Residential Type</td>
                    <td>2BHK</td>
                  </tr>
                  <tr>
                    <td>Unit Type </td>
                    <td>67.15 Sq. Mtrs</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section id="residential_plans">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            PLANS
          </h3>

          <div className="row mb-4">
            {plans.map((value, key) => {
              return (
                <div
                  key={key}
                  className={`col-lg-3 col-md-4 col-sm-12 all-btn ${
                    index === key + 1 ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    style={{
                      width: width <= 1023 ? "85%" : "100%",
                    }}
                    onClick={() => {
                      setindex(key + 1);
                    }}
                    className="btn btn-color px-3 mb-3 active"
                    id="btn_first"
                  >
                    {value}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="content">
            <ImageCarousel
              show={showPlanCarousel}
              onClose={() => {
                setShowPlanCarousel(false);
              }}
              activeIndex={planActiveIndex - 1}
              imageList={planskiesImages}
            />
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/skiesplan1.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(1);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : index === 2 ? (
                <div id="div_second" class="text-center">
                  <img
                    src="/source/images/skiesplan3.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(2);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : index === 3 ? (
                <div id="div_third" class="text-center">
                  <img
                    src="/source/images/skiesplan2.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(3);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : index === 4 ? (
                <div id="div_fourth" class="text-center">
                  <img
                    src="/source/images/skiesplan4.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(4);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : index === 5 ? (
                <div id="div_fifth" class="text-center">
                  <img
                    src="/source/images/skiesplan5.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(5);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : (
                <div id="div_seventh" class="text-center">
                  <img
                    src="/source/images/skiesplan6.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(7);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="aminity">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            AMENITIES
          </h3>
          <div className="row">
            <div className="aminities col-lg-4 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span className="">Landscape Garden </span>
                </li>
                <li>
                  <GiGrass className="fs-4 aminity_icon brown-color" />
                  <span className="">Party Lawn </span>
                </li>
                <li>
                  <GiHouse className="fs-4 aminity_icon brown-color" />
                  <span className="">Club House </span>
                </li>
                <li>
                  <CgGym className="fs-4 aminity_icon brown-color" />
                  <span className="">Gymnasium & Yoga Space </span>
                </li>
                <li>
                  <FaChess className="fs-4 aminity_icon brown-color" />
                  <span className="">Indoor Game </span>
                </li>
                <li>
                  <GiBeachBall className="fs-4 aminity_icon brown-color" />
                  <span className="">Basketball Court </span>
                </li>
              </ul>
            </div>

            <div className="aminities col-lg-4 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span>Children Play Area </span>
                </li>
                <li>
                  <MdSportsTennis className="fs-4 aminity_icon brown-color" />
                  <span>Badminton Court </span>
                </li>
                <li>
                  <GiSolarPower className="fs-4 aminity_icon brown-color" />
                  <span>Solar Power For common areas </span>
                </li>
                <li>
                  <MdElectricalServices className="fs-4 aminity_icon brown-color" />
                  <span>Power Back-up for Common Area</span>
                </li>
                <li>
                  <MdOutlineSecurity className="fs-4 aminity_icon brown-color" />
                  <span>Round the clock Security </span>
                </li>
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <li>
                  <GiParkBench className="fs-4 aminity_icon brown-color" />
                  <span className="">Senior citizen Sit-out</span>
                </li>
                <li>
                  <GiBusStop className="fs-4 aminity_icon brown-color" />
                  <span className="">Drop off zone</span>
                </li>
                <li>
                  <GiCctvCamera className="fs-4 aminity_icon brown-color" />
                  <span className="">24 * 7 CCTV Surveillance</span>
                </li>
                <li>
                  <MdOutlineMeetingRoom className="fs-4 aminity_icon brown-color" />
                  <span className="">Decorative entrance foyer </span>
                </li>
                <li>
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span className="">2 Auto Lifts with ARD in each Block</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="CONNECTIVITY">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            CONNECTIVITY
          </h3>
          <div className="row">
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiRoad className="fs-4 aminity_icon brown-color" />
                  <span>200 FT S.P. Ring road - 1.5 Kms </span>
                </li>
                <li>
                  <MdSchool className="fs-4 aminity_icon brown-color" />
                  <span>INIFD Gandhinagar - 1.5 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiRailRoad className="fs-4 aminity_icon brown-color" />
                  <span>Railway Station - 13 Kms</span>
                </li>
                <li>
                  <MdOutlineLocalAirport className="fs-4 aminity_icon brown-color" />
                  <span className="">Airport - 9 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdSchool className="fs-4 aminity_icon brown-color" />
                  <span>Nirma University - 10 Kms</span>
                </li>
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span>Gandhinagar - 15 Kms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="location">
        <div className="section_padding"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 map">
              <iframe
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117422.15564049932!2d72.46268821640625!3d23.117500599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833336b979ed%3A0xd4c5273ff5fe9707!2sKALASAGAR%20SKIES%20APPARTMENT!5e0!3m2!1sen!2sin!4v1659680402149!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h3 className="section-title pb-3 brown-color mt-4 mt-lg-0">
                LOCATION
              </h3>
              <p className="justify">
                Get connected to 2 of the most developing cities of Gujarat -
                Ahmedabad & Gandhinagar within minutes from your home. Kalasagar
                Skies is a world within a city worth visiting & more than that
                worth Living In.
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Opp Kala Dham , 100 F.T Pramukh Swami Road , Visat Gandhinagar
                  T.P. 44 , Motera – Chandkheda , Ahmedabad – 382424
                </p>
              </div>

              <div className="numbers">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 pt-2 pt-md-0 fw-bold">
                    Contact number:
                  </div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    <a href="tel:+91 9978798000" className="number">
                      +91-6353275346
                    </a>
                    /
                    <a href="tel:/+91 9978798000" className="number">
                      +91-8320900294
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Email Address:&nbsp;&nbsp;
                  </span>
                  <a href="mailto:kala_projects@yahoo.co.in" className="email">
                    kala_projects@yahoo.co.in
                  </a>
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Kalatirth+Premium/@23.098789,72.5924983,17z/data=!3m1!4b1!4m5!3m4!1s0x395e83f08b00b43b:0xf9f736c6b4de8ebb!8m2!3d23.098789!4d72.594687"
                target="blank"
              >
                <button size="lg" className="btn btn-color mt-3">
                  Location on map
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>
    </>
  );
};

export default Kalasagarskies;
