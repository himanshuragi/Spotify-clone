import React from "react";
import "../components_css/navbar.css";
import logo from "../components/spotifylogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left_container">
        <img className="logo" src={logo} />
        <h1>Spotify</h1>
      </div>
      <div className="burger_box">
        <div className="burger"></div>
      </div>
      <div className="right_container">
        <h3>Premium</h3>
        <h3>Help</h3>
        <h3>Download</h3>
        <h4>|</h4>
        <h3>Sign Up</h3>
        <h3>Log In</h3>
      </div>
    </div>
  );
}

export default Navbar;
