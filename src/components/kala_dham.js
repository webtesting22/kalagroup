import React, { useState } from "react";
import { Carousel, Table } from "react-bootstrap";
import { MdSecurity } from "react-icons/md";
import { GiCctvCamera, GiGrass } from "react-icons/gi";
import { GiTreeSwing } from "react-icons/gi";
import { GiSecurityGate } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { GiBusStop } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdDeck } from "react-icons/md";
import { FaChess } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { GiRailRoad } from "react-icons/gi";
import { RiRunFill } from "react-icons/ri";
import { MdLocalParking } from "react-icons/md";
import { MdOutlineLocalAirport } from "react-icons/md";
import { FaCouch } from "react-icons/fa";
import { MdSportsTennis } from "react-icons/md";
import { BrochureButton } from "../components/brochure-download.js";
import { ImageCarousel } from "./ImageCarousel.js";

const plans = [
  "2 BHK UNIT PLAN-BLOCK A-B , D-E & G-H",
  "2 BHK UNIT PLAN-C & F",
  "BASEMENT PLAN",
  "GROUND PLAN",
  "TYPICAL FLOOR LAYOUT-BLOCK A-B ,D-E & G-H",
  "TYPICAL FLOOR PLAN-C & F",
];

const carosalimginner = [
  "/source/images/dham1.png",
  "/source/images/dham2.png",
  "/source/images/dham3.png",
  "/source/images/dham4.png",
  "/source/images/dham5.png",
  "/source/images/dham6.png",
  "/source/images/dham7.png",
  "/source/images/dham8.png",
  "/source/images/dham9.png",
];

const gallery_dham = [
  "/source/images/sample1.png",
  "/source/images/sample2.png",
  "/source/images/sample3.png",
  "/source/images/sample4.png",
  "/source/images/sample5.png",
  "/source/images/sample6.png",
  "/source/images/sample7.png",
  "/source/images/sample8.png",
  "/source/images/sample9.png",
  "/source/images/sample10.png",
  "/source/images/sample11.png",
  "/source/images/sample12.png",
  // "/source/images/sample13.png",
  // "/source/images/sample14.png",
];

const plandhamImages = [
  "/source/images/2-BHK-UNIT-PLAN.png",
  "/source/images/2-BHK-UNIT-PLAN-c.png",
  "/source/images/BASEMENT-PLAN.png",
  "/source/images/GROUND-PLAN.png",
  "/source/images/TYPICAL-FLOOR-LAYOUT-BLOCK.png",
  "/source/images/TYPICAL-FLOOR-PLAN-C.png",
];

const KalaDham = () => {
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
            KALA DHAM
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
                Thoughtfully created for the perfect life, this premium
                residential development is an amazing fusion of unmatched
                comforts, beautiful landscapes and fabulous lifestyle amenities.
                Live a life without compromise at{" "}
                <span className="brown-color project_story">
                  &nbsp;KALA DHAM&nbsp;
                </span>
                Live a life without compromise at &nbsp;
                <span className="brown-color project_story">Kala Dham</span>
              </p>
              {/* <a href="../../public/brochure.pdf" target="blank">
                <button size="lg" className="btn btn-color mt-2">
                  <BsFileEarmarkPdf className="fs-3 aminity_icon" />
                  <span className="fs-5 align-middle">Download Brochure </span>
                </button>
              </a> */}
              <a href="/Kala Dham-Brochure.pdf" download={true} target="_blank">
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
              PR/GJ/AHMEDABAD/DASKROI/AUDA/RAA01232/ 060118
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
                    <td>Residential Type</td>
                    <td>2BHK</td>
                  </tr>
                  <tr>
                    <td>Carpet Area</td>
                    <td>50.97 - 50.56 Sq. Mtrs</td>
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
                    src="/source/images/2-BHK-UNIT-PLAN.png"
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
                    src="/source/images/2-BHK-UNIT-PLAN-c.png"
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
                    src="/source/images/BASEMENT-PLAN.png"
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
                    src="/source/images/GROUND-PLAN.png"
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
                    src="/source/images/TYPICAL-FLOOR-LAYOUT-BLOCK.png"
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
                    src="/source/images/TYPICAL-FLOOR-PLAN-C.png"
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

      <section className="aminity">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-5 brown-color">
            AMENITIES
          </h3>
          <div className="row">
            <div className="aminities col-lg-1"></div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-6 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdSecurity className="fs-4 aminity_icon brown-color" />
                  <span className="">Round The Clock Security</span>
                </li>
                <li>
                  <GiCctvCamera className="fs-4 aminity_icon brown-color" />
                  <span>
                    CCTV Surveillance At <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entrance
                    Gate & Common Area
                  </span>
                </li>
                <li>
                  <FaChess className="fs-4 aminity_icon brown-color" />
                  <span>Club House</span>
                </li>
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon brown-color" />
                  <span>Children Play Area</span>
                </li>
                <li>
                  <GiWeightLiftingUp className="fs-4 aminity_icon brown-color" />
                  <span>Gymnasium</span>
                </li>
                <li>
                  <RiRunFill className="fs-4 aminity_icon brown-color" />
                  <span>Jogging Track</span>
                </li>
                <li>
                  <MdSportsTennis className="fs-4 aminity_icon brown-color" />
                  <span>Badminton Court</span>
                </li>
                <li>
                  <GiGrass className="fs-4 aminity_icon brown-color" />
                  <span>Party Lawn</span>
                </li>
              </ul>
            </div>

            {/* <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div> */}
            <div className="aminities col-lg-5 col-md-6 col-sm-12">
              <ul className="list_icon">
                <li>
                  <TiArrowUnsorted className="fs-4 aminity_icon brown-color" />
                  <span>Fully Automatic Lift</span>
                </li>
                <li>
                  <MdDeck className="fs-4 aminity_icon brown-color" />
                  <span>Common Terrace</span>
                </li>
                <li>
                  <GiSecurityGate className="fs-4 aminity_icon brown-color" />
                  <span>Entrance Gate With Security Cabin </span>
                </li>
                <li>
                  <GiBusStop className="fs-4 aminity_icon brown-color" />
                  <span>Pick Up & Drop-Off Zone</span>
                </li>
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span>Garden</span>
                </li>
                <li>
                  <MdLocalParking className="fs-4 aminity_icon brown-color" />
                  <span>Ground and Basement Parking</span>
                </li>
                <li>
                  <FaCouch className="fs-4 aminity_icon brown-color" />
                  <span>Seating Area</span>
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
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <MdOutlineLocalAirport className="fs-4 aminity_icon brown-color" />
                  <span>Airport - 9.50 Kms</span>
                </li>
                <li>
                  <FaRegHandshake className="fs-4 aminity_icon brown-color" />
                  <span className="">Commercial Hub - 2.30 kms</span>
                </li>
              </ul>
            </div>
            {/* <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div> */}
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <GiRailRoad className="fs-4 aminity_icon brown-color" />
                  <span>Ahmedabad Railway Station - 13.00 Kms</span>
                </li>
                <li>
                  <GiFruitTree className="fs-4 aminity_icon brown-color" />
                  <span>Public Garden - 2.70 Kms</span>
                </li>
              </ul>
            </div>
            <div className="aminities d-block d-lg-none col-md-3 col-sm-12 my-auto"></div>
            <div className="aminities col-lg-4 col-md-6 col-12">
              <ul className="list_icon">
                <li>
                  <IoMdTrain className="fs-4 aminity_icon brown-color" />
                  <span>Propose Metro Station- 1.80 Kms</span>
                </li>
                <li>
                  <MdSchool className="fs-4 aminity_icon brown-color" />
                  <span>School - 1.90 Kms</span>
                </li>
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
            {gallery_dham.map((value, key) => {
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
              imageList={gallery_dham}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.489986274183!2d72.60025821537806!3d23.115758684905973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836dcc3aa079%3A0x86c3b33f041a79bb!2sKALADHAM!5e0!3m2!1sen!2sin!4v1652864560842!5m2!1sen!2sin"
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
                The Project is located in one of the most developing and one of
                the most well connected areas of Ahmedabad. Near to the cheers
                of the New Stadium and the upcoming metro Rail project
              </p>
              <div className="contact_details">
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">Address:&nbsp;&nbsp;</span>
                  Kala Dham, Opp.Omkar Bunglows, Vista- Gandhinagar Highway,
                  T.P.44- Motera, Ahmedabad- 382424
                </p>
              </div>

              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Contact number:&nbsp;&nbsp;
                  </span>
                  <a href="tel:+91 90330 46550" className="number">
                    +91 90330 46550
                  </a>
                  /
                  <a href="tel:+91 98255 55665" className="number">
                    +91 98255 55665
                  </a>
                </p>
              </div>

              <div>
                <p>
                  <span class="pt-2 pt-md-0 fw-bold">
                    Email-Address:&nbsp;&nbsp;
                  </span>
                  <a href="mailto:kaladham2016@gmail.com" className="email">
                    kaladham2016@gmail.com
                  </a>
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/KALADHAM/@23.1157587,72.6002582,17z/data=!3m1!4b1!4m5!3m4!1s0x395e836dcc3aa079:0x86c3b33f041a79bb!8m2!3d23.1157567!4d72.6024375"
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

export default KalaDham;
