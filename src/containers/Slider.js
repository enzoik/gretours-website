import React from "react";
import Slide from "../components/slide/Slide";

function Slider() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        minHeight: "500px",
      }}
    >
      <Slide
        title="This is a title"
        content="This is some random content to be displayed"
        avatar="V"
      />
    </div>
  );
}

export default Slider;
