import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import {
  MdBalcony,
  MdOutlineMeetingRoom,
  MdPower,
  MdSecurity,
  MdSignalWifiStatusbarConnectedNoInternet3,
} from "react-icons/md";
import {
  GiCctvCamera,
  GiCrossroad,
  GiGrass,
  GiMeditation,
  GiParkBench,
  GiRoad,
  GiSolarPower,
} from "react-icons/gi";
import { GiTreeSwing } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaChess, FaIntercom } from "react-icons/fa";
import { GiRailRoad } from "react-icons/gi";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdOutlineLocalAirport } from "react-icons/md";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { CgGym } from "react-icons/cg";
import { BiCameraMovie } from "react-icons/bi";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Space } from "antd";

const plans = [
  "BASEMENT PLANS",
  "GROUND FLOOR PLANS",
  "TYPICAL FLOOR PLAN",
  "TYPICAL UNIT PLAN",
];

const carosalimginner = [
  "/source/images/samartheshwar1.png",
  "/source/images/samartheshwar2.png",
  "/source/images/samartheshwar3.png",
  "/source/images/samartheshwar4.png",
  "/source/images/samartheshwar5.png",
];

const samartheswarplan = [
  "/source/images/samartheswarplan1.png",
  "/source/images/samartheswarplan2.png",
  "/source/images/samartheswarplan3.png",
  "/source/images/samartheswarplan4.png",
];

const gallery_samartheshwar = [
  "/source/images/photosamartheshwar1.png",
  "/source/images/photosamartheshwar2.png",
  "/source/images/photosamartheshwar3.png",
  "/source/images/photosamartheshwar4.png",
  "/source/images/photosamartheshwar5.png",
  "/source/images/photosamartheshwar6.png",
  "/source/images/photosamartheshwar7.png",
  "/source/images/photosamartheshwar8.png",
  "/source/images/photosamartheshwar9.png",
];

const plandhamImages = [
  "/source/images/2-BHK-UNIT-PLAN.png",
  "/source/images/2-BHK-UNIT-PLAN-c.png",
  "/source/images/BASEMENT-PLAN.png",
  "/source/images/GROUND-PLAN.png",
  "/source/images/TYPICAL-FLOOR-LAYOUT-BLOCK.png",
  "/source/images/TYPICAL-FLOOR-PLAN-C.png",
];

const Kalasamartheshwar = () => {
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
            KALA SAMARTHESHWAR
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
                A New Home for some, but the same old home for a few other
                members with the smell of new paint, new amenities &amp; new
                luxury. This new high rise towers plans to scribble upon old
                memories faded away &amp; write new cheerful and memorable
                chapters for generations to come. Welcome to
                <span className="brown-color project_story">
                  &nbsp;Kala Samartheshwar&nbsp;
                </span>
                where Style has a new Definition.
              </p>
              <a href="/Kala Samartheshwar.pdf" download={true} target="_blank">
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
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA08366/220421
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>PARIMAL GARDEN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typology</td>
                    <td>Residential</td>
                  </tr>
                  <tr>
                    <td>Residential Type</td>
                    <td>4BHK</td>
                  </tr>
                  <tr>
                    <td>Carpet Area</td>
                    <td>170.90 – 176.03 Sq. Mtrs</td>
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
              imageList={plandhamImages}
            />
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/samartheswarplan1.png"
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
                    src="/source/images/samartheswarplan2.png"
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
                    src="/source/images/samartheswarplan3.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(3);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : (
                <div id="div_seventh" class="text-center">
                  <img
                    src="/source/images/samartheswarplan4.png"
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
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <FaChess className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Club House & Indoor Games{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <CgGym className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Developed Gymnasium{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <BiCameraMovie className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Home Theatre </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiParkBench className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Senior Citizen Sit - Out{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiTreeSwing className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Children Play Area{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiGrass className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Party Lawn </span>
                </Space>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiMeditation className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>Yoga Deck </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdBalcony className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Balcony in each Unit{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiSolarPower className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Solar Power for common lights{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdPower className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    D.G. Power back up for common areas
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiRoad className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Vehicle Access Control{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiCctvCamera className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    24 x 7 CCTV Surveillance{" "}
                  </span>
                </Space>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-8 col-sm-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdSecurity className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>24 x 7 Security </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <RiParkingBoxLine className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Ample parking - Mechanical Parking{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <FaIntercom className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Intercom Facility connected to each Flat{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdSignalWifiStatusbarConnectedNoInternet3 className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    DTH / Land Line / Internet Provision{" "}
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdOutlineMeetingRoom className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Elegant Entrance Foyer{" "}
                  </span>
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
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiFruitTree className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Parimal Garden - 100 Mtrs
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiRoad className="fs-2 aminity_icon brown-color" />
                  <span className="">C.G. Road - 950 Mtrs</span>
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
                  <GiCrossroad className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Shyamal Cross Roads - 3.5 Kms
                  </span>
                </Space>
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <GiRailRoad className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    Kalupur Railway Station - 6.6 Kms
                  </span>
                </Space>
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex", margin: "20px 0" }}
                >
                  <MdOutlineLocalAirport className="fs-2 aminity_icon brown-color" />
                  <span style={{ fontSize: "1.1rem" }}>
                    International Airport- 12.5 Kms
                  </span>
                </Space>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section className="residential_project_gallery">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            PROJECT GALLERY
          </h3>
          <div className="row">
            {gallery_samartheshwar.map((value, key) => {
              return (
                <div
                  className="col-lg-3 col-md-6 col-sm-12 mb-0 mb-lg-0 gallery"
                  key={key}
                >
                  <div className="imgzoom">
                    <img
                      src={value}
                      className="img-fluid shadow-1-strong rounded mb-4 fixs_height"
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
              imageList={gallery_samartheshwar}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1319861109805!2d72.5561038!3d23.0189256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85f5ac4c58ad%3A0x849932807b8fb924!2sKala%20Samartheshwar!5e0!3m2!1sen!2sin!4v1659437083315!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h3 className="section-title pb-3 brown-color mt-4 mt-md-0 mt-lg-0">
                LOCATION
              </h3>
              <p className="justify">
                Geographically at the Centre of the city and in reality at the
                heart of the city, this luxury Abodes are crafted for the
                selected few. Near to the hustle of the Central Business
                District (CBD) and also near to the calm of the Parimal garden.
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Opp Amijyot Apartments, B/h JMC house, Parimal garden,
                  Ahmedabad - 380006
                </p>
              </div>

              <div className="d-none d-lg-block d-md-none d-sm-none">
                <Space
                  direction="horizontal"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <div className="fw-bold"> Contact number:</div>
                  <Space
                    direction="horizontal"
                    size="middle"
                    style={{ display: "flex" }}
                  >
                    <a href="tel:+91 7926924564" className="number">
                      +91-9925472278/
                    </a>

                    <a href="tel:+91 26923423" className="number">
                      +91-9426001681
                    </a>
                  </Space>
                </Space>
              </div>
              <div className="d-block d-lg-none d-md-block d-sm-block">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 pt-2 pt-md-0 fw-bold">
                    Contact number:
                  </div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    <a href="tel:+91 7926924564" className="number">
                      +91-9925472278/
                    </a>

                    <a href="tel:+91 26923423" className="number">
                      +91-9426001681
                    </a>
                  </div>
                </div>
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
                href="https://www.google.co.in/maps/place/Kala+Samartheshwar/@23.0189305,72.5539151,17z/data=!3m1!4b1!4m5!3m4!1s0x395e85f5ac4c58ad:0x849932807b8fb924!8m2!3d23.0189256!4d72.5561038"
                target="blank"
              >
                <button size="lg" className="btn btn-color mt-2 mt-md-0 mt-4">
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

export default Kalasamartheshwar;
