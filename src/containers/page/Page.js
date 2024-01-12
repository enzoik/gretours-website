import React from "react";
import "./Page.css";

function Page({ image, content }) {
  return (
    <>
      <div class="container">
        <div className="banner">
          <img alt="" src={image} />
        </div>
        <div className="content">{content}</div>
      </div>
    </>
  );
}

export default Page;
