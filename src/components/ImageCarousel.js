import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";

export const ImageCarousel = ({
  show,
  imageList,
  imgClass,
  imgStyle,
  activeIndex,
  onClose,
}) => {
  const [index, setIndex] = useState(null);
  React.useEffect(() => {
    setIndex(activeIndex);
  }, [activeIndex, setIndex]);
  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };
  return (
    <>
      <Modal show={show} centered onHide={onClose} size="lg">
        <Carousel
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
          fade
          touch
          variant="dark"
          onTouchMove
          pause={false}
        >
          {imageList.map((value, key) => {
            return (
              <Carousel.Item key={key}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={value}
                    style={{ ...imgStyle }}
                    className={`img-fluid ${imgClass}`}
                    alt="404 - Not Found"
                  />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Modal>
    </>
  );
};
