import React from "react";
import "../components_css/footer.css";
import logo from "./spotifylogo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="spotify_container">
        <img className="logo" src={logo} />
        <h1>Spotify</h1>
      </div>
      <div className="divs">
        <h2>company</h2>
        <h3>About</h3>
        <h3>Jobs</h3>
        <h3>For the Record</h3>
      </div>
      <div className="divs">
        <h2>communities</h2>
        <h3>For Artists</h3>
        <h3>Developers</h3>
        <h3>Brands</h3>
        <h3>Investors</h3>
        <h3>Vendors</h3>
      </div>
      <div className="divs">
        <h2>useful links</h2>
        <h3>Help</h3>
        <h3>Web Player</h3>
        <h3>Free Mobile App</h3>
      </div>
      <div className="social_div">
        <div className="social_container">
          {" "}
          <InstagramIcon className="icon" />
        </div>
        <div className="social_container">
          <TwitterIcon className="icon" />
        </div>
        <div className="social_container">
          {" "}
          <FacebookIcon className="icon" />
        </div>
      </div>
      <div className="final_footer">
        <div className="footer_left">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Ads</p>
        </div>
        <div className="footer_right">
          <p>india</p>
          <p> ©2020 Spotify AB</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
