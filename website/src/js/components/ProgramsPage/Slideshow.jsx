import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SliderStyle.css'
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  indicators: true,
  arrows: false
}
 
const Slideshow = (props) => {
  console.log(props);
  return (
    <div className="slide-container">
       <Fade {...fadeProperties}>

        <div className="each-fade">
           <div className="image-container">
             <img src={props.images[0]} alt={"1"}/>
           </div>
          {/* <h2>First Slide</h2> */}
         </div>

         <div className="each-fade">
           <div className="image-container">
             <img src={props.images[1]}  alt={"2"}/>
           </div>
           {/* <h2>Second Slide</h2> */}
         </div>

         <div className="each-fade">
           <div className="image-container">
             <img src={props.images[2]} alt={"3"}/>
           </div>
           {/* <h2>Third Slide</h2> */}
         </div>

       </Fade>
    </div>
  )
}

export default Slideshow;