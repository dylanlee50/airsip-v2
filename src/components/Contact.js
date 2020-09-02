import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Modal from "react-modal";

const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_AoOeQ6NK",
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
      <h4>Hi! What's your name?</h4>
      <input type="text" placeholder="Type your answer here..." name="name" />
      <h4>What is your email address?</h4>
      <input
        type="email"
        name="user_email"
        placeholder="Type your answer here..."
      />
      <h4>How can we help you today?</h4>
      <textarea
        className="form-control"
        id=""
        placeholder="Type your answer here..."
        name="message"
      ></textarea>
      <input type="submit" value="Submit" />
      <button onClick={() => setModalIsOpen(true)}>Test</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Thank you for your message!</h2>
        <h3>We will get back to you within 24 hours.</h3>
      </Modal>
    </form>
  );
};

export default Contact;
