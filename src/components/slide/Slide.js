import React from "react";
import "./Slide.css";

function Slide({ background, title, content }) {
  return (
    <>
      <div data-background={background} className="container">
        <div className="avatar">
          <img alt={title} src={background} />
        </div>
        <h4 className="title">{title}</h4>
        <article className="content">{content}</article>
      </div>
    </>
  );
}

export default Slide;
