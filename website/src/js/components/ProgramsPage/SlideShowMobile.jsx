import React from "react";
import { Fade } from "react-slideshow-image";
import "./SliderStyle.css";

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  indicators: true,
  arrows: false,
};

const SlideshowMobile = ({ images }) => {
  return (
    <div className="slide-container-mobile">
      <Fade {...fadeProperties}>
        {images.map((image) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
            className="each-fade"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90vh",
              }}
              className="image-container"
            >
              <img
                src={`https://elasticbeanstalk-us-west-2-127661128201.s3-us-west-2.amazonaws.com/${image}`}
                alt={"Program"}
              />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideshowMobile;
