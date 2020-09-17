import React, { useState } from "react";
import "./DisplayPage.css";
import airdrop from "../images/airdrop.png";
import Modal from "react-modal";
import SignUp from "./SignUp";

function DisplayPage() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Modal
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
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
            left: "35%",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            borderRadius: "4px",
            outline: "none",
            padding: "30px",
            width: "30%",
            height: "30%",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            textAlign: "center",
          },
        }}
      >
        <h2 style={{ marginBottom: 15, fontWeight: "bold", fontSize: 50 }}>
          Thank you!
        </h2>
        <p
          style={{ marginBottom: 10, paddingVertical: 10, textAlign: "center" }}
        >
          You are on our waiting list now. We will send you an email when we're
          ready for you to join.
        </p>
        <div>
          <button
            style={{
              marginTop: 10,
              borderRadius: 7,
              padding: 8,
              color: "white",
              backgroundColor: "#2699FB",
              borderWidth: 0,
            }}
            onClick={() => setVisible(false)}
          >
            Awesome!
          </button>
        </div>
      </Modal>
      <div className="display-container">
        <div className="image">
          <img src={airdrop} alt="Airdrop" width="6%" />
        </div>
        <div className="description">
          <h2 className="header">Personal advice, accessible to everyone</h2>
          <br />
          <br />
          <p
            style={{
              color: "#A4A4A4",
              fontSize: 20,
              fontStyle: "normal",
            }}
          >
            Sign up to join Airsip's private beta on iOS
          </p>
          <br />
        </div>
        <div className="signup">
          <SignUp promptModal={setVisible} />
        </div>
      </div>
    </>
  );
}

export default DisplayPage;
