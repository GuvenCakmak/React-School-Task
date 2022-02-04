import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import codeimg from "../../images/codeimg.jpg";

export default function HomePage() {
  return (
    <>
      {/* <div className="codeimg-container">
        <img className="codeimg" src={codeimg}></img>
      </div> */}
      <div className="home-icons">
        <h2>Welcome to my portfolio</h2> <br />
        <Link to="/CV" className="cv-icon">
          <i class="fas fa-briefcase fa-2x">CV</i>
        </Link>
        <br />
        <Link to="/About" className="pb-icon">
          <i class="fas fa-book-open fa-2x">About</i>
        </Link>
        <br />
        <Link to="/ContactMe" className="km-icon">
          <i class="fas fa-address-card fa-2x">Contact</i>
        </Link>
      </div>
    </>
  );
}
