import React, { useState } from "react";
import Slide from "../components/slide/Slide";
import "./Slider.css";

function Slider() {
  const [slides, setSlides] = useState([
    {
      title: "GreTours",
      caption:
        "GreTours offer you the ultimate experience. Indulge with us as we take you to the best attractions and destinations in East Africa. With over 10 years of service, we know all the corners and angles of attraction and we gurantee you/'ll live to tell the story. Our guides are from a selection of the best and they know what they are doing and will leave with many blisssful moments you will cherish for your lifetime",
      active: true,
    },
    {
      title: "Wild Destinations",
      caption:
        "GreTours offer you the ultimate experience. Indulge with us as we take you to the best attractions and destinations in East Africa. With over 10 years of service, we know all the corners and angles of attraction and we gurantee you/'ll live to tell the story. Our guides are from a selection of the best and they know what they are doing and will leave with many blisssful moments you will cherish for your lifetime",
      active: false,
    },
    {
      title: "City Tours",
      caption:
        "GreTours offer you the ultimate experience. Indulge with us as we take you to the best attractions and destinations in East Africa. With over 10 years of service, we know all the corners and angles of attraction and we gurantee you/'ll live to tell the story. Our guides are from a selection of the best and they know what they are doing and will leave with many blisssful moments you will cherish for your lifetime",
      active: false,
    },
    {
      title: "Camp Xperience",
      caption:
        "GreTours offer you the ultimate experience. Indulge with us as we take you to the best attractions and destinations in East Africa. With over 10 years of service, we know all the corners and angles of attraction and we gurantee you/'ll live to tell the story. Our guides are from a selection of the best and they know what they are doing and will leave with many blisssful moments you will cherish for your lifetime",
      active: false,
    },
    {
      title: "Ultimate Xperience",
      caption:
        "GreTours offer you the ultimate experience. Indulge with us as we take you to the best attractions and destinations in East Africa. With over 10 years of service, we know all the corners and angles of attraction and we gurantee you/'ll live to tell the story. Our guides are from a selection of the best and they know what they are doing and will leave with many blisssful moments you will cherish for your lifetime",
      active: false,
    },
  ]);

  const handleOnClick = (index) => {
    const updatedSlides = slides.map((slide, i) => ({
      ...slide,
      active: i === index,
    }));
    setSlides(updatedSlides);
  };
  return (
    <div className="slider-container">
      {slides.map((slide, i) => (
        <Slide
          key={i}
          title={slide.title}
          caption={slide.caption}
          active={slide.active}
          background="/img/helloword.jpg"
          onClick={() => handleOnClick(i)}
        />
      ))}
    </div>
  );
}

export default Slider;
