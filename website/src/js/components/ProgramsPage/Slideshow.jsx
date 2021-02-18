import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SliderStyle.css';

const fadeProperties = {
	duration: 3000,
	transitionDuration: 500,
	indicators: true,
	arrows: false
};

const Slideshow = props => {
	return (
		<div className='slide-container'>
			<Fade {...fadeProperties}>
				{props.images.map((image, idx) => (
					<div
						key={idx}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
						className='each-fade'
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
							className='image-container'
						>
							<img src={image} alt={'Program Image'} />
						</div>
						{/* <h2>Second Slide</h2> */}
					</div>
				))}
			</Fade>
		</div>
	);
};

export default Slideshow;
