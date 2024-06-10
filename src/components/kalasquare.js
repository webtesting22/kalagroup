import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { GiCrossroad, GiParkBench, GiWaterFountain } from "react-icons/gi";
import { TiArrowUnsorted } from "react-icons/ti";
import {
  MdLocalGroceryStore,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineMeetingRoom,
  MdSecurity,
  MdSportsTennis,
} from "react-icons/md";
import { FaChess, FaSatelliteDish } from "react-icons/fa";
import { GiCryptEntrance } from "react-icons/gi";

import { GiRailRoad } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { GiTreeSwing } from "react-icons/gi";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { RiParkingBoxLine } from "react-icons/ri";
// import { ImagePreview } from "./ImagePreview";

const squareplans = [
  "GROUND PLAN",
  "TYPICAL FLOOR PLAN",
  "UNIT PLAN - 1",
  "UNIT PLAN - 2",
];

const carosalimginner = [
  "/source/images/square1.png",
  "/source/images/square2.png",
  "/source/images/square3.png",
  "/source/images/square4.png",
  "/source/images/square5.png",
  "/source/images/square6.png",
  "/source/images/square7.png",
];

const gallery_square = [
  "/source/images/squaregallery1.png",
  "/source/images/squaregallery2.png",
  "/source/images/squaregallery3.png",
  "/source/images/squaregallery4.png",
  "/source/images/squaregallery5.png",
  "/source/images/squaregallery6.png",
];

const gallery_sample = [
  "/source/images/squaresample1.png",
  "/source/images/squaresample2.png",
  "/source/images/squaresample3.png",
  "/source/images/squaresample4.png",
  "/source/images/squaresample5.png",
  "/source/images/squaresample6.png",
  "/source/images/squaresample7.png",
];

const planpremiumImages = [
  "/source/images/premium-plan1.png",
  "/source/images/premium-plan2.png",
  "/source/images/premium-plan3.png",
  "/source/images/premium-plan4.png",
  "/source/images/premium-plan5.png",
];

const Kalasquare = () => {
  const [index, setindex] = React.useState(1);
  const [showGalleryCarousel, setShowGalleryCarousel] = useState(false);
  const [showGallerysCarousel, setShowGallerysCarousel] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);
  const [gallerysActive, setGallerysActive] = useState(false);
  const [showPlanCarousel, setShowPlanCarousel] = useState(false);
  const [planActiveIndex, setPlanActiveIndex] = useState(1);

  const width = window.innerWidth;
  return (
    <>
      <section className="residential_banner">
        <div className="container">
          <h3 className="section-title text-center mb-lg-5 pt-lg-3 mt-lg-5 pt-md-3 mt-md-5 pt-3 mb-3 mt-5 px-4 brown-color fs-1">
            KALA SQUARE @ PARIMAL GARDEN
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
                Some people live life on a scale larger than life. They give
                more to and take more from the world. They consider it their
                privilege to alter the surroundings if they don’t come up to
                their standard, they have a different conception of every aspect
                of life.
                <span className="brown-color project_story">
                  &nbsp;KALA SQUARE&nbsp;
                </span>
                is a very special place being built for them.
              </p>
              {/* <a href="../../public/brochure.pdf" target="blank">
                  <button size="lg" className="btn btn-color mt-2">
                    <BsFileEarmarkPdf className="fs-3 aminity_icon" />
                    <span className="fs-5 align-middle">Download Brochure </span>
                  </button>
                </a> */}
              <a
                href="/KALA SQUARE-4BHK - BROCHURE.pdf"
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

      {/* <section className="rera_details">
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
        </section> */}

      <section className="aminity">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            AMENITIES
          </h3>
          <div className="row">
            <div className="aminities col-lg-1"></div>
            <div className="col-md-3 d-lg-none d-sm-none d-md-none"></div>
            <div className="aminities col-lg-6 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdOutlineCheckBoxOutlineBlank className="fs-4 aminity_icon brown-color" />
                  <span className="">More than 75% open area</span>
                </li>
                <li>
                  <MdOutlineMeetingRoom className="fs-4 aminity_icon brown-color" />
                  <span>Individual foyer for each flat</span>
                </li>
                <li>
                  <MdSecurity className="fs-4 aminity_icon brown-color" />
                  <span>Round the clock gated security</span>
                </li>
                <li>
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span>Fully automatic elevators</span>
                </li>
                <li>
                  <RiParkingBoxLine className="fs-4 aminity_icon brown-color" />
                  <span>Basement + ground level parking facility</span>
                </li>
                <li>
                  <FaChess className="fs-4 aminity_icon brown-color" />
                  <span>
                    Indoor recreation area (Table Tennis, Chess, Carom, Cards)
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-3 d-lg-none d-sm-none d-none d-md-none"></div>
            <div className="aminities col-lg-5 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span>Children's Play area</span>
                </li>
                <li>
                  <FaSatelliteDish className="fs-4 aminity_icon brown-color" />
                  <span>Jogging track</span>
                </li>
                <li>
                  <MdSportsTennis className="fs-4 aminity_icon brown-color" />
                  <span>Tennis court/ Badminton court </span>
                </li>
                <li>
                  <GiCryptEntrance className="fs-4 aminity_icon brown-color" />
                  <span>Pickup and drop zone for children</span>
                </li>
                <li>
                  <GiParkBench className="fs-4 aminity_icon brown-color" />
                  <span>Senior citizen sit out</span>
                </li>
                <li>
                  <GiWaterFountain className="fs-4 aminity_icon brown-color" />
                  <span>Water body &amp; fountain</span>
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
                  <GiRailRoad className="fs-4 aminity_icon brown-color" />
                  <span>Railway Station - 6.9 Kms</span>
                </li>
                <li>
                  <MdOutlineLocalAirport className="fs-4 aminity_icon brown-color" />
                  <span className="">Airport - 13.4 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdLocalGroceryStore className="fs-4 aminity_icon brown-color" />
                  C.G.Sqaure Mall - 2.4 Kms
                </li>
                <li>
                  <GiCrossroad className="fs-4 aminity_icon brown-color" />
                  <span>Isckon Cross Roads - 6.6 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiParkBench className="fs-4 aminity_icon brown-color" />
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
            {squareplans.map((value, key) => {
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
                    src="/source/images/squareplan1.png"
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
                    src="/source/images/squareplan2.png"
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
                    src="/source/images/squareplan3.png"
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
                    src="/source/images/squareplan4.png"
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
            {gallery_square.map((value, key) => {
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
              imageList={gallery_square}
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

      <section className="residential_project_sample">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            SAMPLE FLAT PHOTOS
          </h3>
          <div className="row">
            {gallery_sample.map((value, key) => {
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
                        setGallerysActive(key);
                        setShowGallerysCarousel(true);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <ImageCarousel
              imageList={gallery_sample}
              show={showGallerysCarousel}
              onClose={() => {
                setShowGallerysCarousel(false);
              }}
              activeIndex={gallerysActive}
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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.207384182376!2d72.5566635!3d23.0161565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fd75d7f437%3A0x2254893890f8cc6d!2sKala%20Square!5e0!3m2!1sen!2sin!4v1659358569004!5m2!1sen!2sin"
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
                The air conditioned interiors come with room sizes surprisingly
                larger than you're likely to find in today's apartments.
                Conveniently located on C.G. Road, KALA SQUARE is in the
                vicinity of the city's burgeoning business and entertainment
                hub.
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Opp. Upvan Apartment, Parimal under Pass, C.G. Road, Ahmedabad
                  - 380007”
                </p>
              </div>

              {/* <div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 pt-2 pt-md-0 fw-bold">
                    Contact number:
                  </div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    <a href="tel:+91 7926923423" className="number">
                      +91 79269 23423
                    </a>
                    /
                    <a href="tel:+079 2692 4564" className="number">
                      +079 2692 4564
                    </a>
                    /
                  </div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-3 col-md-4"></div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    {" "}
                    <a href="tel:+079 30617045" className="number">
                      +079 3061 7045
                    </a>
                  </div>
                </div>
              </div> */}

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
                href="https://www.google.com/maps/place/Kala+Square/@23.0161565,72.5566635,17z/data=!4m9!1m2!2m1!1skala+square+Opp.+Upvan+Apartment,+Parimal+under+Pass,+C.G.+Road,+Ahmedabad+%E2%80%93+380007%E2%80%9D!3m5!1s0x395e84fd75d7f437:0x2254893890f8cc6d!8m2!3d23.0161248!4d72.5588638!15sClhrYWxhIHNxdWFyZSBPcHAuIFVwdmFuIEFwYXJ0bWVudCwgUGFyaW1hbCB1bmRlciBQYXNzLCBDLkcuIFJvYWQsIEFobWVkYWJhZCDigJMgMzgwMDA34oCdkgESYXBhcnRtZW50X2J1aWxkaW5n"
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

export default Kalasquare;
