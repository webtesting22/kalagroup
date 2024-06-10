import React, { lazy } from "react";
import { BrochureButton } from "./brochure-download";

const Error = () => {
  return (
    <div className="container">
      <img
        src="/source/images/error.png"
        loading="lazy"
        alt="404 - Not Found"
        className="img-fluid"
      />
    </div>
  );
};

export default Error;
