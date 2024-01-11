import React from "react";
import "./Slide.css";

function Slide({ background, title, caption, active, onClick }) {
  return (
    <div
      className={`container ${active ? "active" : ""}`}
      onClick={onClick}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content">
        <div className="icon"></div>
        <h4 className="title">{title}</h4>
        <article className="caption">{caption}</article>
      </div>
    </div>
  );
}

export default Slide;
