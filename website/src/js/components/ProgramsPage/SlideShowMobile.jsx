import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SliderStyle.css'
 
<<<<<<< HEAD:website/src/js/components/ProgramsPage/SlideShowMobile.jsx
const fadeImages = [
  require('../../../images/Logo.png'),
  require('../../../images/Logo.png'),
  require('../../../images/Logo.png')
];
 
=======
>>>>>>> 1a10cf6590e0530ebaf3c6796649542a91822fec:website/src/js/components/ProgramsPage/SlideShowMobile.jsx
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  indicators: true,
  arrows: false
}
 
const SlideshowMobile = (props) => {
  console.log(props);
  return (
    <div className="slide-container mobile">
       <Fade {...fadeProperties}>

        <div className="each-fade">
           <div className="image-container">
             <img src={props.images[0]} alt={"1"} />
           </div>
         </div>

         <div className="each-fade">
           <div className="image-container">
             <img src={props.images[1]}  alt={"2"}/>
           </div>
         </div>

         <div className="each-fade">
           <div className="image-container">
             <img src={props.images[2]} alt={"3"}/>
           </div>
         </div>

       </Fade>
    </div>
  )
}

export default SlideshowMobile;