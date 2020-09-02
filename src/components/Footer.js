import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// import { withRouter } from "react-router";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="flex-container">
        <div className="row">
          <div className="col1">
            <h4>Airsip</h4>
            <ul>
              <li>Video Q&amp;A app for advice</li>
              <li>&#169; 2020 Eddify Co.</li>
            </ul>
          </div>
          <ul className="col2">
            <li>Contact</li>
            <li>
              <Link to="/terms_privacy" id="terms_privacy">
                Terms &amp; Privacy
              </Link>
            </li>
          </ul>
          <div className="transparent">
            <h4>Airsip</h4>
            <ul>
              <li>Video Q&amp;A app for advice</li>
              <li>&#169; 2020 Eddify Co.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
