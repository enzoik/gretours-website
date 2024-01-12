import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="top">
        <div className="logo">Logo</div>
        <div className="socials">socials</div>
        <div className="menu"><button>bookings</button></div>
      </div>
    </header>
  );
}

export default Header;
