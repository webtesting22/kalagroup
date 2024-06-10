import React, { useLayoutEffect, useRef } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setFooterSize } from "../redux/actions";

const Footer = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(setFooterSize(ref?.current?.clientHeight));
  }, [ref, dispatch]);
  return (
    <>
      <footer id="footer" ref={ref} className="footer-shadow">
        <div className="container">
          <div className="row mt-2 mt-lg-4 mb-3 mt-4 mt-lg-0">
            <div className="col-lg-6 col-md-6 col-12 my-auto">
              <h5 className=" text-start text-lg-start text-md-start brown-color">
                Contact Details
              </h5>
              <p className=" text-start text-lg-start text-md-start">
                <MdCall className="fs-4 aminity_icon text-secondary" />
                079 26923423
              </p>
              <div className="text-start text-lg-start text-md-start">
                <a href="https://www.instagram.com/kala_group/?hl=en">
                  <BsInstagram className="fs-4 footer_icon" />
                </a>
                <a href="https://www.facebook.com/KalaInfra">
                  <BsFacebook className="fs-4 footer_icon" />
                </a>
                <a href="https://www.linkedin.com/company/kala-group-of-companies/">
                  <BsLinkedin className="fs-4 footer_icon" />
                </a>
                <a href="https://www.youtube.com/channel/UCP4AxFOA5n6_re3_6yug-Tg">
                  <BsYoutube className="fs-4 footer_icon" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="brown-color text-lg-end text-md-end text-start mt-4 mt-md-0 mt-lg-0">
                Meet us here <br />
              </h5>
              {/* <h6 className="text-center">Address:</h6> */}
              <a href="https://maps.app.goo.gl/eZgcZF8PmCDNLmRj6" target="_blank">
              <p className="text-lg-end text-md-end text-start">
                <ImOffice className="fs-4 aminity_icon text-secondary" />
                {/* "B", First Floor, Kalatirth Complex,
                <br /> Nr. Prernatirth Derasar,
                <br /> Jodhpur , Satellite, Ahmedabad - 380015 */}

                Kala Group of companies 17 Times
                <br/> corporate park behind sidhu bhavan road <br/>
                Thaltej Ahmedabad
              </p>
              </a>
             
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row mx-0 mb-4 mt-0 row mx-lg-5 mb-lg-4 mt-lg-1">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="text-secondary footer_text text-center">
                @2022{" "}
                <a
                  href="https://outleadsolutions.com/"
                  className="footer_link brown-color"
                  target="blank"
                >
                  Outlead solution
                </a>{" "}
                All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
