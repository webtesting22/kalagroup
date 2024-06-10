import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import {
  GiCctvCamera,
  GiGasStove,
  GiGate,
  GiParkBench,
  GiRoad,
  GiTennisRacket,
  GiTreeSwing,
  GiWell,
} from "react-icons/gi";
import { MdOutlineMeetingRoom, MdOutlinePlace } from "react-icons/md";

import { GiRailRoad } from "react-icons/gi";
import { MdOutlineLocalAirport } from "react-icons/md";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";
import { CgGym } from "react-icons/cg";
import { RiParkingBoxLine } from "react-icons/ri";
import { TiArrowUnsorted } from "react-icons/ti";
import { ImRoad } from "react-icons/im";

// import { ImagePreview } from "./ImagePreview";

const plans = [
  "BLOCK A UNIT PLAN",
  "BLOCK B UNIT PLAN",
  "TYPICAL SITE PLAN",
  "GROUND PLAN",
  "BASEMENT PLAN",
];

const carosalimginner = [
  "/source/images/kunjcarosal1.png",
  "/source/images/kunjcarosal2.png",
  "/source/images/kunjcarosal3.png",
  "/source/images/kunjcarosal4.png",
  "/source/images/kunjcarosal5.png",
  "/source/images/kunjcarosal6.png",
  "/source/images/kunjcarosal7.png",
];

const gallery_kunj = [
  "/source/images/kunjgallery1.png",
  "/source/images/kunjgallery2.png",
  "/source/images/kunjgallery3.png",
  "/source/images/kunjgallery4.png",
  "/source/images/kunjgallery5.png",
  "/source/images/kunjgallery6.png",
  "/source/images/kunjgallery7.png",
];

const planskiesImages = [
  "/source/images/kunjplan2.png",
  "/source/images/kunjplan3.png",
  "/source/images/kunjplan4.png",
  "/source/images/kunjplan5.png",
  "/source/images/kunjplan1.png",
];

const gallery_sample = [
  "/source/images/kunjsample1.png",
  "/source/images/kunjsample2.png",
  "/source/images/kunjsample3.png",
  "/source/images/kunjsample4.png",
  "/source/images/kunjsample5.png",
  "/source/images/kunjsample6.png",
  "/source/images/kunjsample7.png",
  "/source/images/kunjsample8.png",
];

const Kalakunj = () => {
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
            KALA KUNJ @ PALDI
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
                Elegant, refined and exclusive, the homes have much more to
                offer. The breath-taking view to the intricate detailing of each
                home, these warm and spacious 3 BHK apartments are indeed the
                quintessence of the good life.
                <span className="brown-color project_story">
                  &nbsp;So if you love the classics, then you’ll feel right at
                  home here.&nbsp;
                </span>
              </p>

              <a
                href="/Kala Kunj - 3 BHK @ Paldi (Brochure).pdf"
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
              PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA00789/211117
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-offset-2 col-md-9 col-sm-12 text-center ">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>LOCATION</th>
                    <th>PALDI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Typology</td>
                    <td>Residential</td>
                  </tr>
                  <tr>
                    <td>Residential Type</td>
                    <td>3BHK</td>
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
                    <td>Unit Type 1 </td>
                    <td>115.34</td>
                  </tr>
                  <tr>
                    <td>Unit Type 2 </td>
                    <td>107.23</td>
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
                    src="/source/images/kunjplan2.png"
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
                    src="/source/images/kunjplan3.png"
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
                    src="/source/images/kunjplan5.png"
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
                    src="/source/images/kunjplan4.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(4);
                      setShowPlanCarousel(true);
                    }}
                  />
                </div>
              ) : (
                <div id="div_fifth" class="text-center">
                  <img
                    src="/source/images/kunjplan1.png"
                    className="img-fluid"
                    alt="plan_images"
                    onClick={() => {
                      setPlanActiveIndex(5);
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
            <div className="aminities col-lg-6 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiGate className="fs-4 aminity_icon brown-color" />
                  <span>Secured designer main entrance gate </span>
                </li>
                <li>
                  <GiTennisRacket className="fs-4 aminity_icon brown-color" />
                  <span>Club house - With Indoor Games like Table Tennis</span>
                </li>
                <li>
                  <CgGym className="fs-4 aminity_icon brown-color" />
                  <span>Well Developed Gymnasium </span>
                </li>
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span>Children Play Area </span>
                </li>
                <li>
                  <RiParkingBoxLine className="fs-4 aminity_icon brown-color" />
                  <span>Sufficient parking facility</span>
                </li>
                <li>
                  <GiRoad className="fs-4 aminity_icon brown-color" />
                  <span>Internal R.C.C. roads</span>
                </li>
              </ul>
            </div>
            {/* <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div> */}
            <div className="aminities col-lg-6 col-md-6 col-sm-12 my-auto">
              <ul className="list_icon">
                <li>
                  <GiCctvCamera className="fs-4 aminity_icon brown-color" />
                  <span>24 x 7 CCTV surveillance for common area </span>
                </li>
                <li>
                  <MdOutlineMeetingRoom className="fs-4 aminity_icon brown-color" />
                  <span>Well designed entrance foyer </span>
                </li>
                <li>
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span>2 S. S. elevators in each block </span>
                </li>
                <li>
                  <GiWell className="fs-4 aminity_icon brown-color" />
                  <span>
                    Bore well & Narmada water connection from AMC pipeline{" "}
                  </span>
                </li>
                <li>
                  <GiGasStove className="fs-4 aminity_icon brown-color" />
                  <span>Provision for Gas connection </span>
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
                  <span>Railway Station - 7.6 Kms</span>
                </li>
                <li>
                  <MdOutlineLocalAirport className="fs-4 aminity_icon brown-color" />
                  <span className="">Airport - 15.2 Kms</span>
                </li>
                {/* <li>
                  <GiRoad className="fs-4 aminity_icon brown-color" />
                  <span>200 FT S.P. Ring road - 1.5 Kms </span>
                </li>
                <li>
                  <MdSchool className="fs-4 aminity_icon brown-color" />
                  <span>INIFD Gandhinagar - 1.5 Kms</span>
                </li> */}
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <GiRoad className="fs-4 aminity_icon brown-color" />
                  C.G.Road - 1.5 Kms
                </li>
                <li>
                  <ImRoad className="fs-4 aminity_icon brown-color" />
                  <span>S.G.Highway - 6.6 Kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdOutlinePlace className="fs-4 aminity_icon brown-color" />
                  <span>Satellite - 3.9 Kms</span>
                </li>
                <li>
                  <GiParkBench className="fs-4 aminity_icon brown-color" />
                  <span>Riverfront Park - 5.1 Kms</span>
                </li>
              </ul>
            </div>
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

      {/* <section className="construction_update">
        <div className="container">
          <div className="mb-5">
            <h3 className="section-title text-center mb-lg-5 mt-lg-3 mb-4 mt-0 brown-color">
              CONSTRUCTION UPDATE
            </h3>
            <Carousel>
              {constructionskies.map((value, key) => {
                return (
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={value}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section> */}

      <section className="location">
        <div className="section_padding"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 map">
              <iframe
                title="Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2919098939897!2d72.5544606!3d23.0130518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85cec60491a9%3A0xa1fc2c5a430595db!2sKalakunj!5e0!3m2!1sen!2sin!4v1659356949598!5m2!1sen!2sin"
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
                Unique, dynamic design and uplifting residential lifestyle
                apartments. With Jain Derasar, Temple, Shops, Supermarkets,
                Banks, Hospitals, Restaurants & tranquil surroundings to go,
                it’s the ideal place to invest equities like time & money.”
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  64-68, Vasantkunj Society,Nr.Dhara Appartments, Paldi,
                  Ahmedabad, Gujarat 380007
                </p>
              </div>

              <div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12 pt-2 pt-md-0 fw-bold">
                    Contact number:
                  </div>
                  <div className="col-lg-6 col-md-11 col-sm-12">
                    <a href="tel:+91 7926924564" className="number">
                      +91-9426001681
                    </a>
                    /
                    <a href="tel:+91 26923423" className="number">
                      +91-9925472278
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
                href="https://www.google.com/maps/place/Kalakunj/@23.0130518,72.5544606,17z/data=!3m1!4b1!4m5!3m4!1s0x395e85cec60491a9:0xa1fc2c5a430595db!8m2!3d23.0130486!4d72.554461?authuser=0&hl=en"
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

export default Kalakunj;
