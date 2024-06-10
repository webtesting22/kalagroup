import React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { GrElevator } from "react-icons/gr";
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
import { BsFileEarmarkPdf } from "react-icons/bs";
import { ImagePreview } from "./ImagePreview";
import { BrochureButton } from "./brochure-download";
import { Carousel } from "react-bootstrap";
const commercialplans = [
  "TYPICAL FLOOR PLAN",
  "4BHK TYPICAL PLAN-1",
  "4BHK TYPICAL PLAN-2",
  "3BHK TYPICAL PLAN",
  "4BHK PENTHOUSE-1",
  "4BHK PENTHOUSE-2",
  "3BHK PENTHOUSE",
];

const carosalcomminner = [
  "/source/images/topstory.png",
  "/source/images/roadside.png",
  "/source/images/NightView.png",
  "/source/images/GardenView.png",
];

const CommercialInner = () => {
  const [index, setindex] = React.useState(1);
  const width = window.innerWidth;
  return (
    <>
      <section className="commercial_banner">
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-5 pt-3 brown-color fs-1">
            KALA SIDDHI
          </h3>
          <Carousel>
            {carosalcomminner.map((value, key) => {
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
                A
                <span className="brown-color project_story">
                  CITY AT YOUR DOORSTEP
                </span>
                Imagine having beautifully lit streets, spectacular views and an
                easy access to everything you need in just a heartbeat. That is
                the reality of
                <span className="brown-color project_story">KALA SIDDHI </span>
                and its legendary life. With its crisp lines and modern styling,
                it's a unique addition to this posh neighborhood of Law Garden
                and one that offers all the conveniences and design advances of
                21st century legendary living.
              </p>
              <a href="/brochure.pdf" download={true} target="_blank">
                <BrochureButton />
              </a>
              {/* <a href="../../public/brochure.pdf" target="blank">
                <button size="lg" className="btn btn-color mt-2">
                  <BsFileEarmarkPdf className="fs-3 aminity_icon" />
                  <span className="fs-5 align-middle">Download Brochure </span>
                </button>
              </a> */}
              <BrochureButton />
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
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9 col-sm-12">
              <ul className="list_icon">
                <li>
                  <MdOutlineMeetingRoom className="fs-4 aminity_icon" />
                  <span className="">Spacious Foyers For Each Floor</span>
                </li>
                <li>
                  <GrShieldSecurity className="fs-4 aminity_icon" />
                  <span>Round The Clock Gated Security</span>
                </li>
                <li>
                  <GrElevator className="fs-4 aminity_icon" />
                  <span>Fully Automatic Elevators</span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9 col-sm-12">
              <ul className="list_icon">
                <li>
                  <RiParkingBoxLine className="fs-4 aminity_icon" />
                  <span> Basement + Ground Floor Parking</span>
                </li>
                <li>
                  <CgGym className="fs-4 aminity_icon" />
                  <span> Well Equipped Air Conditioned Gymnasium</span>
                </li>
                <li>
                  <GiTreeSwing className="fs-4 aminity_icon" />
                  <span> Children Play Area</span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9 col-sm-12">
              <ul className="list_icon">
                <li>
                  <BiBus className="fs-4 aminity_icon" />
                  <span>Pick Up & Drop Off Zone For Children</span>
                </li>
                <li>
                  <GiParkBench className="fs-4 aminity_icon" />{" "}
                  <span>Senior Citizen Sit Out</span>
                </li>
                <li>
                  <GiWaterFountain className="fs-4 aminity_icon" />
                  <span>Water Body</span>
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
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9">
              <ul className="list_icon">
                <li>
                  <GiRailRoad className="fs-4 aminity_icon" />
                  <span>Railway Station - 4.4 Kms</span>
                </li>
                <li>
                  <MdOutlineLocalAirport className="fs-4 aminity_icon" />
                  <span>Airport - 11.4 Kms</span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9">
              <ul className="list_icon">
                <li>
                  <span>
                    {" "}
                    <GiRoad className="fs-4 aminity_icon" />
                    C.G.Road - 1.1 Kms
                  </span>
                </li>
                <li>
                  <GiCycling className="fs-4 aminity_icon" />
                  <span className="">Happy Streets - 650m</span>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-lg-none d-sm-none d-md-block"></div>
            <div className="aminities col-lg-4 col-md-9">
              <ul className="list_icon">
                <li>
                  <ImRoad className="fs-4 aminity_icon" />
                  <span>S.G.Highway - 3.7 Kms</span>
                </li>
                <li>
                  <GiWaterMill className="fs-4 aminity_icon" />
                  <span>Riverfront Park - 3.5 Kms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section_padding"></div>
      </section>

      <section id="commercial_plans">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            PLANS
          </h3>

          <div className="row mb-4">
            {commercialplans.map((value, key) => {
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
            <div className="row">
              {index === 1 ? (
                <div id="div_first" class="text-center">
                  <img
                    src="/source/images/TYPICAL FLOOR PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : index === 2 ? (
                <div id="div_second" class="text-center">
                  <img
                    src="/source/images/BASEMENT PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : index === 3 ? (
                <div id="div_third" class="text-center">
                  <img
                    src="/source/images/FIRST_FLOOR_PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : index === 4 ? (
                <div id="div_fourth" class="text-center">
                  <img
                    src="/source/images/GROUND_PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : index === 5 ? (
                <div id="div_fifth" class="text-center">
                  <img
                    src="/source/images/SECOND_FLOOR_PLAN.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : index === 6 ? (
                <div id="div_sixth" class="text-center">
                  <img
                    src="/source/images/UNIT_TYPE_2.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              ) : (
                <div id="div_seventh" class="text-center">
                  <img
                    src="/source/images/UNIT_TYPE_1.png"
                    className="img-fluid"
                    alt="plan_images"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="commercial_project_gallery">
        <div className="section_padding"></div>
        <div className="container">
          <h3 className="section-title text-center mb-5 mt-3 brown-color">
            PROJECT GALLERY
          </h3>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/GardenView.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Boat on Calm Water"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/NightView.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Mountains in the Clouds"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/roadside.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Waves at Sea"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/topstory.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Waves at Sea"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/projectgallery1.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Boat on Calm Water"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/projectgallery2.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Mountains in the Clouds"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/projectgallery3.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Waves at Sea"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 mb-4 mb-lg-0 gallery">
              <div className="imgzoom">
                <ImagePreview
                  source="/source/images/projectgallery4.png"
                  className="w-100 shadow-1-strong rounded mb-4 fixs_height"
                  alt="Waves at Sea"
                />
              </div>
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
              <h6 className="pt-3">Address:</h6>
              <p>
                Beside Mayor's Residence, Netaji Rd, Opp. Pantaloons, Law
                garden, Ahmedabad, 380006
              </p>
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

export default CommercialInner;
