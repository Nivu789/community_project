import React, { useEffect, useRef, useState } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/css/skyblue' // Assuming you have Splide installed

// You can customize the styles as per your preference
const MySlider = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const splideRef = useRef<HTMLDivElement | null>(null); // Reference to the Splide container
  const barRef = useRef(null); // Reference to the progress bar element

  useEffect(() => {
    
    if(!splideRef.current) return;

    const splide = new Splide(splideRef.current,{
        height: '500px',
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        autoplay: true,
        interval: 3000,
    });

    // Event listener to update the progress bar width on mount and move
    const updateProgressBar = () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      setProgressWidth(100 * rate); // Update the width state
    };

    splide.on('mounted move', updateProgressBar); // Attach event listeners

    splide.mount(); // Initialize Splide carousel

    return () => {
      splide.destroy(); // Clean up when the component is unmounted
    };
  }, []);

  return (
    <div className="splide" ref={splideRef}>
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">Slide 01</li>
          <li className="splide__slide">Slide 02</li>
          <li className="splide__slide">Slide 03</li>
          <li className="splide__slide">Slide 04</li>
          {/* You can add more slides here */}
        </ul>
      </div>

      {/* Progress bar element */}
      <div className="my-slider-progress">
        <div
          className="my-slider-progress-bar"
          style={{ width: `${progressWidth}%` }}
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

export default MySlider;

