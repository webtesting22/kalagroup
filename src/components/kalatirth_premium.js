import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import { GiTap } from "react-icons/gi";
import { AiFillFire } from "react-icons/ai";
import { TiArrowUnsorted } from "react-icons/ti";
import { GiCctvCamera } from "react-icons/gi";
import { MdLocalParking } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";
import { GiFruitTree } from "react-icons/gi";
import { GiCryptEntrance } from "react-icons/gi";
import { FaCouch } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { MdAir } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdSchool } from "react-icons/md";
import { GiTheater } from "react-icons/gi";
import { GiPoolTableCorner } from "react-icons/gi";
import { GiRailRoad } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GiTreeSwing } from "react-icons/gi";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { Space } from "antd";
// import { ImagePreview } from "./ImagePreview";

const plans = [
  "FIRST BASEMENT",
  "GROUND FLOOR PLAN",
  "SECOND BASEMENT",
  "TYPICAL FLOOR PLAN",
  "TYPICAL UNIT PLAN",
];

const carosalimginner = [
  "/source/images/premiumc1.png",
  "/source/images/premiumc2.png",
  "/source/images/premiumc3.png",
  "/source/images/premiumc4.png",
  "/source/images/premiumc5.png",
  "/source/images/premiumc6.png",
  "/source/images/premiumc7.png",
  "/source/images/premiumc8.png",
];

const gallery_tirth = [
  "/source/images/samplep1.jpeg",
  "/source/images/samplep2.jpeg",
  "/source/images/samplep3.jpeg",
  "/source/images/samplep4.jpeg",
  "/source/images/samplep5.jpeg",
  "/source/images/samplep6.jpeg",
  "/source/images/samplep7.jpeg",
  "/source/images/samplep8.jpeg",
  // "/source/images/samplep9.jpeg",
  // "/source/images/samplep10.jpeg",
];

const planpremiumImages = [
  "/source/images/premium-plan1.png",
  "/source/images/premium-plan2.png",
  "/source/images/premium-plan3.png",
  "/source/images/premium-plan4.png",
  "/source/images/premium-plan5.png",
];

const KalatirthPremium = () => {
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
            KALATIRTH PREMIUM
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
                Welcome to Luxury of Everyday Delights. Life is nothing but a
                collage of wonderful memories. Come to
                <span className="brown-color project_story">
                  {" "}
                  KALATIRTH PREMIUM{" "}
                </span>
                to indulge in the amazing lifestyle amenities with your loved
                ones to make each day special. A space where your lifestyle
                feels Premium.
              </p>
              <a
                href="/Kalatirth Premium-Motera.pdf"
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
          <div>
            <h3 className="section-title text-center mb-5 mt-3 brown-color">
              RERA DETAILS
            </h3>
            <p className="text-center">
              <span className="fw-bold">Rera No.</span> :
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA00756/18111
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>MOTERA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typology</td>
                    <td>Residential</td>
                  </tr>
                  <tr>
                    <td>Residential type</td>
                    <td>4BHK</td>
                  </tr>
                  <tr>
                    <td> Carpet Area</td>
                    <td>155.28 Sq. Mtrs</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="aminity">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            AMENITIES
          </h3>
          <div className="row">
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiTap className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    24 Hrs. Water Supply From Tube Well & AMC
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Two Elevators</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <AiFillFire className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    PNG Pipe Line To Every Flat
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdLocalParking className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Ground Floor & Double Basement Parking
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Well Landscape Garden
                  </span>
                </Space>
              </ul>
            </div>

            <div className="aminities col-lg-4 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Children Play Area</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <FaCouch className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Seating Area</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <FaSatelliteDish className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Centrally Fitted DTH Connection
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiCctvCamera className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    24Hrs. CCTV Surveillance Camera{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiCryptEntrance className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Grand Entrance Foyer
                  </span>
                </Space>
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdAir className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Air Conditioner - Branded Air conditioner split units in all
                    rooms
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiPoolTableCorner className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Indoor Pool Table</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <CgGym className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Fully Equippe Gymnasium
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiTheater className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Home Theatre </span>
                </Space>
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
            <div className="aminities col-lg-4 col-md-6">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdOutlineLocalAirport className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Airport - 8.80 Kms</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiRailRoad className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Ahmedabad Railway Station - 11.00 Kms
                  </span>
                </Space>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <IoMdTrain className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Propose Metro Station - 1 Kms
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <FaRegHandshake className="fs-4 aminity_icon brown-color" />
                  <span className="">Commercial Hub - 0.65 Kms</span>
                </Space>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdSchool className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>School - 1.7 Kms</span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Public Garden - 0.40 Kms
                  </span>
                </Space>
              </ul>
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
              imageList={planpremiumImages}
            />
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/premium-plan1.png"
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
                    src="/source/images/premium-plan2.png"
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
                    src="/source/images/premium-plan3.png"
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
                    src="/source/images/premium-plan4.png"
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
                    src="/source/images/premium-plan5.png"
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
                    src="/source/images/unittypr-1.png"
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

      <section className="residential_project_gallery">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            PROJECT GALLERY
          </h3>
          <div className="row">
            {gallery_tirth.map((value, key) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-5 gallery"
                  key={key}
                >
                  <div className="imgzoom">
                    <img
                      src={value}
                      className="img-fluid shadow-1-strong rounded fixs_height"
                      alt="Boat on Calm Water"
                      onClick={() => {
                        setGalleryActive(key);
                        setShowGalleryCarousel(true);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <ImageCarousel
              imageList={gallery_tirth}
              show={showGalleryCarousel}
              onClose={() => {
                setShowGalleryCarousel(false);
              }}
              activeIndex={galleryActive}
            />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9537462721332!2d72.59249831537775!3d23.098788984914613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83f08b00b43b%3A0xf9f736c6b4de8ebb!2sKalatirth%20Premium!5e0!3m2!1sen!2sin!4v1652853611307!5m2!1sen!2sin"
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
                The Project is located in one of the most developing and one of
                the most well connected areas of Ahmedabad. Near to the cheers
                of the New Stadium and the upcoming metro Rail project
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Squre Mall, Opposite Devnandan infinity, Besides Kalatirth
                  Tower, behind 4 D, Motera, Ahmedabad, 380005
                </p>
              </div>

              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Contact number:&nbsp;&nbsp;
                  </span>
                  <a href="tel:+91 99787 98000" className="number">
                    +91 99787 98000
                  </a>
                </p>
              </div>

              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Email-Address:&nbsp;&nbsp;
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

export default KalatirthPremium;
