import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../data/navs";
import { setHeaderSize, setOnScroll } from "../redux/actions";
import { useDispatch } from "react-redux/es/exports";

const Header = () => {
  const [residentialDrop, setresidentialDrop] = React.useState(false);
  const [commercialDrop, setCommercialDrop] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);
  const CurrScroll = useSelector((state) => state.app.currscroll);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(setOnScroll());
    });
  });

  useLayoutEffect(() => {
    if (ref) {
      if (ref.current) {
        dispatch(setHeaderSize(ref.current.clientHeight));
      }
    }
  }, [ref, dispatch]);

  return (
    <Navbar
      ref={ref}
      bg="light"
      expand="lg"
      // expanded={false}
      className={`navbar navbar-expand-lg navbar-light bg-white fixed-top 
        ${CurrScroll > 25 ? "nav-shadow" : "shadow-0"}`}
      id="navbarNav"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to={url.home}>
          <img
            src="/source/images/kala_logo.png"
            alt="kala logo"
            className="img-fluid main_logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="set-nav">
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll nav-left">
                <li className="nav-item">
                  <p className="nav-link trust trust">
                    Building trust since 1988
                  </p>
                </li>
              </ul>
            </div>
            <Nav className="me-auto">
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll nav-left">
                <li className="nav-item current-menu-item">
                  <Link
                    className="nav-link active header-link brown-color"
                    aria-current="page"
                    to={url.home}
                  >
                    Home
                  </Link>
                </li>

                <NavDropdown
                  title={
                    <span className="brown-color header-link">Residential</span>
                  }
                  className="brown-color header-link"
                  show={residentialDrop}
                  onMouseEnter={() => {
                    setresidentialDrop(true);
                  }}
                  onMouseLeave={() => {
                    setresidentialDrop(false);
                  }}
                  onClick={() => {
                    navigate(url.residential);
                  }}
                >
                  <NavDropdown.Item
                    href="#ongoing"
                    onClick={() => {
                      window.scrollTo({ top: window.scrollY - 100 });
                    }}
                  >
                    Ongoing Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#upcoming"
                    onClick={() => {
                      window.scrollY = window.scrollY - 100;
                      window.scrollTo({
                        top: window.scrollY - 100,
                      });
                    }}
                  >
                    Upcoming Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#completed"
                    onClick={() => {
                      window.scrollTo({ top: window.scrollY - 100 });
                    }}
                  >
                    Completed Projects
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title={
                    <span className="brown-color header-link">Commercial</span>
                  }
                  className="brown-color header-link"
                  show={commercialDrop}
                  onMouseEnter={() => {
                    setCommercialDrop(true);
                  }}
                  onMouseLeave={() => {
                    setCommercialDrop(false);
                  }}
                  onClick={() => {
                    navigate(url.commercial);
                  }}
                >
                  <NavDropdown.Item
                    href="#ongoing_commercial"
                    onClick={() => {
                      window.scrollY = window.scrollY - 100;
                      window.scrollTo({
                        top: window.scrollY - 100,
                      });
                    }}
                  >
                    Upcoming Projects
                  </NavDropdown.Item>
                </NavDropdown>

                <li className="nav-item current-menu-item main-navigation">
                  <Link
                    className="nav-link header-link brown-color"
                    to={url.contact}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item current-menu-item main-navigation">
                  <Link
                    className="nav-link header-link brown-color"
                    href="./about_us.html"
                    to={url.about}
                  >
                    About Us
                  </Link>
                </li>
                {/* <li className="nav-item current-menu-item main-navigation">
                <Link to={url.brochure}>
                  <button size="lg" className="btn btn-color">
                    E- Brochure
                  </button>
                </Link>
              </li> */}
              </ul>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
