import React from "react";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
import "./DisplayPage.css";
import airdrop from "../images/airdrop.png";
import SignUp from "./SignUp";

function DisplayPage() {
  return (
    <>
      <div className="display-container">
        <div className="image">
          <img src={airdrop} alt="Airdrop" width="6%" />
        </div>
        <div className="description">
          <h2 className="header">Personal advice, accessible to everyone</h2>
          <br />
          <br />
          <p>Sign up to join Airsip's private beta on iOS</p>
          <br />
        </div>
        <div className="signup">
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
