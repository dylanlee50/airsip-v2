import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Contact from "../components/Contact";
import Modal from "react-modal";
// import { withRouter } from "react-router";

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            top: "20%",
            left: "10%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "20px",
            width: "80%",
            height: "55%",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            textAlign: "center",
          },
        }}
      >
        <Contact modalVisible={setModalVisible} />
      </Modal>
      <div className="main-footer">
        <div className="flex-container">
          <div className="row">
            <div className="col1">
              <h4 style={{ marginBottom: 3 }}>Airsip</h4>
              <ul>
                <li>Video Q&amp;A app for advice</li>
                <li>&#169; 2020 Eddify Co.</li>
              </ul>
            </div>
            <ul className="col2">
              <li>
                <button
                  onClick={() => setModalVisible(true)}
                  id="contact-button"
                  style={{
                    backgroundColor: "rgb(0,0,0,0)",
                    color: "white",
                    borderWidth: 0,
                    marginTop: 0,
                  }}
                >
                  Contact
                </button>
              </li>
              <li style={{ marginTop: 5 }}>
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
    </>
  );
};

export default Footer;
