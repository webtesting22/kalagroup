import { BsFileEarmarkPdf } from "react-icons/bs";
import React from "react";

export const BrochureButton = () => {
  return (
    <button size="lg" className="btn btn-color mt-2">
      <BsFileEarmarkPdf className="fs-3 aminity_icon" />
      <span className="fs-5 align-middle">Download Brochure </span>
    </button>
  );
};
