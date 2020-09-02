import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./SignUp.css";
import Modal from "react-modal";

const SignUp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "email_sign_up",
        e.target,
        "user_UzI8BRxePHXK17d7ZGOAX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <input type="email" name="user_email" placeholder="Enter your email..." />
      <input type="submit" value="Sign Up" className="sign-up" />
      <button onClick={() => setModalIsOpen(true)}> Test</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Thank you!</h2>
        <p>You are on our waiting list now.</p>
        <p>We will send you an email when we're ready for you to join.</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Go Back</button>
        </div>
      </Modal>
    </form>
  );
};

export default SignUp;
