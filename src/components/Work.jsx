import {React , useEffect} from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import { motion , useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Have it all",
      text: "From A to Z we have it all.",
    },
    {
      image: ChooseMeals,
      title: "Discounts",
      text: "Get great deals on all products.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "At your doorstep under 10 mins.",
    },
  ];
  const imageStyle = {
    filter: 'hue-rotate(180deg)', // Adjust the degree value for the desired blue color
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Why choose us?</p>
        {/* <h1 className="primary-heading">How do we earn</h1> */}
      </div>
      <div className="work-section-bottom">
      {workInfoData.map((data, index) => (
        <motion.div
          key={data.title}
          className="work-section-info"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: index * 1}}
        >
          <div className="info-boxes-img-container">
            <img src={data.image} alt="" style={imageStyle} />
          </div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Work;