import React from "react";
import { Modal } from "react-bootstrap";

const PopUp = ({ source, show, onHide }) => {
  return (
    <Modal show={show} centered onHide={onHide} size="lg">
      <img
        src={source}
        style={{
          width: "100%",
        }}
        alt="404 - Not Found"
      />
    </Modal>
  );
};

export const ImagePreview = ({ source, style, className, alt }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <img
        style={style}
        className={className}
        src={source}
        alt={alt ? alt : "404 - Not Found"}
        onClick={() => setShowModal(true)}
      />
      <PopUp
        source={source}
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};
