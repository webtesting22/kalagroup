import React from "react";
import { Carousel, Table } from "react-bootstrap";
import { MdSecurity } from "react-icons/md";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiParkingBoxLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import { GiWaterFountain } from "react-icons/gi";
import { GiParkBench } from "react-icons/gi";
import { BiBus } from "react-icons/bi";
import { GiRailRoad } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import { ImRoad } from "react-icons/im";
import { GiWaterMill } from "react-icons/gi";
import { GiCycling } from "react-icons/gi";
import { GiTreeSwing } from "react-icons/gi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { BrochureButton } from "../components/brochure-download.js";
import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel.js";
import { Col, Row, Space } from "antd";

const plans = [
  "TYPICAL FLOOR PLAN",
  "BASEMENT PLAN",
  "FIRST FLOOR PLAN",
  "GROUND PLAN",
  "SECOND FLOOR PLAN",
  "UNIT_TYPE_2",
  "UNIT_TYPE_1",
];

const carosalimginner = [
  "source/images/GardenView.png",
  "source/images/NightView.png",
  "source/images/roadside.png",
  "source/images/topstory.png",
];

const gallery = [
  // "/source/images/GardenView.png",
  // "/source/images/NightView.png",
  // "/source/images/roadside.png",
  // "/source/images/topstory.png",
  "/source/images/projectgallery1.png",
  "/source/images/projectgallery2.png",
  "/source/images/projectgallery3.png",
  "/source/images/projectgallery4.png",
  "/source/images/projectgallery1.png",
  "/source/images/projectgallery2.png",
  "/source/images/projectgallery3.png",
  "/source/images/projectgallery4.png",
];

const planImages = [
  "/source/images/TYPICAL FLOOR PLAN.png",
  "/source/images/BASEMENT PLAN.png",
  "/source/images/FIRST_FLOOR_PLAN.png",
  "/source/images/GROUND_PLAN.png",
  "/source/images/SECOND_FLOOR_PLAN.png",
  "/source/images/unittypr-2.png",
  "/source/images/unittypr-1.png",
];

const ResidentialInner = () => {
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
            KALA SIDDHI
          </h3>
          <Carousel onTouchMove pause={false} variant="dark">
            {carosalimginner.map((value, key) => {
              return (
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100 same-height"
                    src={value}
                    alt="Kala Siddhi Images"
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
                A&nbsp;
                <span className="brown-color project_story">
                  CITY AT YOUR DOORSTEP&nbsp;
                </span>
                Imagine having beautifully lit streets, spectacular views and an
                easy access to everything you need in just a heartbeat. That is
                the reality of
                <span className="brown-color project_story">
                  &nbsp;KALA SIDDHI&nbsp;
                </span>
                and its legendary life. With its crisp lines and modern styling,
                it's a unique addition to this posh neighborhood of Law Garden
                and one that offers all the conveniences and design advances of
                21st century legendary living.
              </p>
              {/* <a href="../../public/brochure.pdf" target="blank">
                <button size="lg" className="btn btn-color mt-2">
                  <BsFileEarmarkPdf className="fs-3 aminity_icon" />
                  <span className="fs-5 align-middle">Download Brochure </span>
                </button>
              </a> */}
              <a
                href="/Kala-Siddhi-brochure.pdf"
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
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA05856/070819
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center">
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
                    <td>Residential and Commercial</td>
                  </tr>
                  <tr>
                    <td>Residential type</td>
                    <td>4BHK</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th colSpan={2}>CARPET AREA AS PER RERA (In Sq.Mtrs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Unit Type 1</td>
                    <td>208.17</td>
                  </tr>
                  <tr>
                    <td>Unit Type 2</td>
                    <td>205.48</td>
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
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                {/* <li></li> */}
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdOutlineMeetingRoom className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Spacious Foyers For Each Floor
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdSecurity className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Round The Clock Gated Security
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <TiArrowUnsorted className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Fully Automatic Elevators
                  </span>
                </Space>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <RiParkingBoxLine className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Basement + Ground Floor Parking
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <CgGym className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Well Equipped Air Conditioned Gymnasium
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiTreeSwing className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Children Play Area</span>
                </Space>{" "}
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <BiBus className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Pick Up & Drop Off Zone For Children
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiParkBench className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Senior Citizen Sit Out
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiWaterFountain className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Water Body</span>
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
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <GiRailRoad className="fs-2 aminity_icon brown-color" />
                  <span>Railway Station - 4.4 Kms</span>
                </li>
                <li>
                  <MdOutlineLocalAirport className="fs-2 aminity_icon brown-color" />
                  <span>Airport - 11.4 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <span>
                    {" "}
                    <GiRoad className="fs-2 aminity_icon brown-color" />
                    C.G.Road - 1.1 Kms
                  </span>
                </li>
                <li>
                  <GiCycling className="fs-2 aminity_icon brown-color" />
                  <span className="">Happy Streets - 650m</span>
                </li>
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <ImRoad className="fs-2 aminity_icon brown-color" />
                  <span>S.G.Highway - 3.7 Kms</span>
                </li>
                <li>
                  <GiWaterMill className="fs-2 aminity_icon brown-color" />
                  <span>Riverfront Park - 3.5 Kms</span>
                </li>
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
              imageList={planImages}
            />
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/TYPICAL FLOOR PLAN.png"
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
                    src="/source/images/BASEMENT PLAN.png"
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
                    src="/source/images/FIRST_FLOOR_PLAN.png"
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
                    src="/source/images/GROUND_PLAN.png"
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
                    src="/source/images/SECOND_FLOOR_PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(5);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : index === 6 ? (
                <div id="div_sixth" class="text-center">
                  <img
                    src="/source/images/unittypr-2.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(6);
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
            {gallery.map((value, key) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mb-0 mb-lg-0 gallery"
                  key={key}
                >
                  <div className="imgzoom">
                    <img
                      src={value}
                      className="img-fluid shadow-1-strong rounded mb-0 fixs_height"
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
              imageList={gallery}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8518584965714!2d72.56021741542332!3d23.029210921857768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e851f60eed621%3A0x4fdb2759a920839c!2sKALA%20SIDDHI!5e0!3m2!1sen!2sin!4v1652272584322!5m2!1sen!2sin"
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
                A panoramic view of the core of the culturally rich city is what
                you will witness every day at KALA SIDDHI. Stunning look and
                dynamic architecture just got an upgrade. Jaw dropping design
                perfectly placed for residents to enjoy the pleasures of life.
                Invest in the heart of the city and live like a king.
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Beside Mayor's Residence, Netaji Rd, Opp. Pantaloons, Law
                  garden, Ahmedabad, 380006
                </p>
              </div>
              <div className="numbers d-block d-lg-block d-md-block d-sm-block">
                <Row>
                  <Col
                    xl={5}
                    lg={7}
                    md={10}
                    sm={24}
                    xs={24}
                    className="fw-bold"
                  >
                    Contact number:
                  </Col>
                  <Col xl={19} lg={17} md={14} sm={24} xs={24}>
                    <a href="tel:+91 79-269 23423" className="number">
                      +91 79-269 23423/
                    </a>
                    <br />
                    <a href="tel:+91 79-2692 4564" className="number">
                      +91 79-2692 4564 /
                    </a>
                    <br />
                    <a href="tel:+91 94260 01681" className="number">
                      +91 94260 01681
                    </a>
                  </Col>
                  {/* <div className="col-lg-2"></div>
                  <div className="col-lg-3 col-md-4"></div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    {" "}
                    <a href="tel:+91 94260 01681" className="number">
                      +91 94260 01681
                    </a>
                  </div> */}
                </Row>
              </div>{" "}
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
                href="https://www.google.co.in/maps/place/KALA+SIDDHI/@23.0292109,72.5602174,17z/data=!3m1!4b1!4m5!3m4!1s0x395e851f60eed621:0x4fdb2759a920839c!8m2!3d23.029206!4d72.5624061"
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

export default ResidentialInner;
