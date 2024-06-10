import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import {
  GiBusStop,
  GiByzantinTemple,
  GiCctvCamera,
  GiCrossroad,
  GiHouse,
  GiParkBench,
  GiSolarPower,
  GiTap,
  GiTreeSwing,
} from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import {
  MdCheckBoxOutlineBlank,
  MdElectricalServices,
  MdOutlineMeetingRoom,
  MdSecurity,
} from "react-icons/md";
import { CgGym } from "react-icons/cg";

import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { FaChess } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import { RiParkingBoxLine } from "react-icons/ri";
// import { ImagePreview } from "./ImagePreview";

const plans = [
  "TYPICAL UNIT PLAN - BLOCK - D",
  "TYPICAL UNIT PLAN - BLOCK - E & F",
  "GROUND PLAN",
  "TYPICAL FLOOR PLAN",
];

const carosalimginner = [
  "/source/images/skyzcarosal1.png",
  "/source/images/skyzcarosal2.png",
  "/source/images/skyzcarosal3.png",
  "/source/images/skyzcarosal4.png",
];

// const gallery_skyz = [
//   "/source/images/skyzgallery1.png",
//   "/source/images/skyzgallery2.png",
//   "/source/images/skyzgallery3.png",
//   "/source/images/skyzgallery4.png",
//   "/source/images/skyzgallery5.png",
//   "/source/images/skyzgallery6.png",
//   "/source/images/skyzgallery7.png",
// ];

const planskyzImages = [
  "/source/images/skyzplan2.png",
  "/source/images/skyzplan1.png",
  "/source/images/skyzplan3.png",
  "/source/images/skyzplan4.png",
];

const KalasagarSkyz = () => {
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
            KALASAGAR SKYZ @ VEJALPUR (SOUTH SATELLITE)
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
                Paradise in the center of the city. Overlook the development
                with Metro and Prahldnagar garden mesmerizing your views.
                Workout at the fully developed Gymnasium or relax in the Garden
                Lawn. This Project story is all about Love between the sky and
                the Building’s Height. Come be part of this love story
                <span className="brown-color project_story">
                  &nbsp;@ Kalasagar Skyz&nbsp;
                </span>
                .
              </p>

              {/* <a
                href="/Brochure Kalasagar skyz D E F At Vejalpur.pdf"
                download={true}
                target="_blank"
              >
                <BrochureButton />
              </a> */}
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
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA07626/031120
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center ">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>VEJALPUR (SOUTH SATELLITE)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typology</td>
                    <td>Residential</td>
                  </tr>
                  <tr>
                    <td>Residential Type</td>
                    <td>2BHK</td>
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
                    <td>Unit Type </td>
                    <td>64.00 - 68.00 Sq Mtrs</td>
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
              imageList={planskyzImages}
            />
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/skyzplan2.png"
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
                    src="/source/images/skyzplan1.png"
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
                    src="/source/images/skyzplan3.png"
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
                    src="/source/images/skyzplan4.png"
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
            {/* <div className="col-lg-2 d-lg-block d-sm-none d-md-none"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiHouse className="fs-4 aminity_icon brown-color" />
                  <span className="">Club House </span>
                </li>
                <li>
                  <CgGym className="fs-4 aminity_icon brown-color" />
                  <span className="">Fully Developed Gymnasium </span>
                </li>
                <li>
                  <FaChess className="fs-4 aminity_icon brown-color" />
                  <span className="">Indoor Game </span>
                </li>
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span className="">Landscape Garden </span>
                </li>
                <li>
                  <MdElectricalServices className="fs-4 aminity_icon brown-color" />
                  <span>D.G. Power Backup for common Areas</span>
                </li>
                <li>
                  <GiSolarPower className="fs-4 aminity_icon brown-color" />
                  <span>Solar Panel for Common Areas </span>
                </li>
              </ul>
            </div>
            {/* <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdOutlineMeetingRoom className="fs-4 aminity_icon brown-color" />
                  <span className="">Decorative Entrance foyer </span>
                </li>
                <li>
                  <GiParkBench className="fs-4 aminity_icon brown-color" />
                  <span className="">Senior citizen Sit-out</span>
                </li>{" "}
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span>Children Play Area </span>
                </li>
                <li>
                  <GiBusStop className="fs-4 aminity_icon brown-color" />
                  <span className="">Pick Up &amp; Drop Off Zone</span>
                </li>
                <li>
                  <GiTap className="fs-4 aminity_icon brown-color" />
                  <span>24 x 7 Water Supply </span>
                </li>
              </ul>
            </div>{" "}
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <RiParkingBoxLine className="fs-4 aminity_icon brown-color" />
                  <span className="">Allotted Parking</span>
                </li>
                <li>
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span className="">Automatic S.S. Lift with ARD System</span>
                </li>
                <li>
                  <MdCheckBoxOutlineBlank className="fs-4 aminity_icon brown-color" />
                  <span className="">Internal Paved Area</span>
                </li>
                <li>
                  <GiCctvCamera className="fs-4 aminity_icon brown-color" />
                  <span className="">CCTV Surveillance</span>
                </li>
                <li>
                  <MdSecurity className="fs-4 aminity_icon brown-color" />
                  <span className="">24 x 7 Security</span>
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
            <div className="col-lg-2 d-lg-block d-sm-none d-md-none"></div>
            <div className="aminities col-lg-5 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span>Prahladnagar Garden - 1.5 Kms </span>
                </li>
                <li>
                  <GiBusStop className="fs-4 aminity_icon brown-color" />
                  <span>Paldi Bus Terminal - 5.30 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-5 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiByzantinTemple className="fs-4 aminity_icon brown-color" />
                  <span>Jain Temple - 850 m</span>
                </li>
                <li>
                  <GiCrossroad className="fs-4 aminity_icon brown-color" />
                  <span className="">Shyamal Cross Road - 1.9 Kms</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5545712535227!2d72.5237321!3d23.0034015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e852c5e8f7b91%3A0xdee70e386448596c!2sKalasagar%20Skyz!5e0!3m2!1sen!2sin!4v1659612557787!5m2!1sen!2sin"
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
                Kalasagar Skyz - project so close to the Developer's Heart that
                words can't describe this work of art. Come visit it to live it.
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Jivraj - Vejalpur Road, Opp. Vejapur Police Chowky, Nr.
                  Vejalpur Nagar Palika, Vejalpur (South Satellite, Ahmedabad -
                  380051.
                </p>
              </div>

              <div className="numbers">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 pt-2 pt-md-0 fw-bold">
                    Contact number:
                  </div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    <a href="tel:+91 7926924564" className="number">
                      +91 99254 62278
                    </a>
                    /
                    <a href="tel:+079 26923423" className="number">
                      +91 94260 01681
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
                href="https://www.google.com/maps/place/KALASAGAR+SKIES+APPARTMENT/@23.1175006,72.4626882,12z/data=!4m9!1m2!2m1!1skala+skies+chandkheda!3m5!1s0x395e833336b979ed:0xd4c5273ff5fe9707!8m2!3d23.1175006!4d72.6027639!15sChVrYWxhIHNraWVzIGNoYW5ka2hlZGGSARJhcGFydG1lbnRfYnVpbGRpbmc"
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

export default KalasagarSkyz;
