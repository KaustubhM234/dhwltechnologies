import React, { useEffect, useRef, useState } from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs"; const about = document.querySelector('.about-section-container');
import CustomizedDialogs from "./video.jsx";

const About = () => {
  const [scroll, setScroll] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const offset = aboutRef.current ? aboutRef.current.offsetTop : 0;

  const imageStyle = {
    filter: 'hue-rotate(180deg)', // Adjust the degree value for the desired blue color
  };
  return (
    <div id="about" className={`about-section-container`} ref={aboutRef}>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" style={imageStyle}/>
      </div>
      <div className={`about-section-image-container ${scroll >= offset/5 ? 'dsa' : ''}`}>
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className={`about-section-text-container  ${scroll >= offset/5 ? 'tt' : ''} `}>
        <p className="primary-subheading">About US</p>
        <h1>Groceries delivered from your<br/> local stores at your doorstep</h1>
        <p className="primary-text">
          Get great deals from your local stores at a click both online and offline.<br/>
          Giving local shops an online presence,<br/>
          providing them with accounting tools,<br/>
          dead stock prediction models, etc. 
        </p>
        
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */}
          <button className="watch-video-button">
            <BsFillPlayCircleFill /><CustomizedDialogs/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
