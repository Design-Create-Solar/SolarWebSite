import React from "react";
import { Fade } from "react-slideshow-image";
import "./SliderStyle.css";

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  indicators: true,
  arrows: false,
};

const SlideshowMobile = (props) => {
  return (
    <div className="slide-container-mobile">
      <Fade {...fadeProperties}>
        {/* <div className='each-fade'>
					<div className='image-container'>
						<img src={props.images[0]} alt={'1'} />
					</div>
				</div>

				<div className='each-fade'>
					<div className='image-container'>
						<img src={props.images[1]} alt={'2'} />
					</div>
				</div>

				<div className='each-fade'>
					<div className='image-container'>
						<img src={props.images[2]} alt={'3'} />
					</div>
				</div> */}
        {props.images.map((image) => (
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
            {/* <h2>Second Slide</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SlideshowMobile;
