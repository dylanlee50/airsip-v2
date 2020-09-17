import React, { useState } from "react";
import "./Contact.css";
import emailjs, { send } from "emailjs-com";
import { Formik } from "formik";

const Contact = ({ modalVisible }) => {
  const [sent, setSent] = useState(false);

  function sendEmail(values) {
    emailjs
      .send("gmail", "template_AoOeQ6NK", values, "user_UzI8BRxePHXK17d7ZGOAX")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {sent ? (
        <div style={{ marginTop: "10%" }}>
          <h2>Thank you for your message!</h2>
          <h3 style={{ marginTop: 15 }}>
            We will get back to you within 24 hours.
          </h3>
          <button
            style={{
              marginTop: 20,
              borderRadius: 7,
              padding: 8,
              color: "white",
              backgroundColor: "#2699FB",

              borderWidth: 0,
            }}
            onClick={() => modalVisible(false)}
          >
            Close
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, actions) => {
            sendEmail(values);
            actions.setSubmitting(false);
            actions.resetForm();
            setSent(true);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h4 style={{ marginTop: 20 }}>Hi! What's your name?</h4>
              <input
                type="text"
                name="name"
                style={{
                  padding: 5,
                  borderWidth: 0,
                  borderBottomWidth: 2,
                  borderColor: "black",
                  width: "30%",
                }}
                placeholder="Name..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                autoFocus
              />
              <h4 style={{ marginTop: 30 }}>What's your email?</h4>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                style={{
                  padding: 5,
                  borderWidth: 0,
                  borderBottomWidth: 2,
                  borderColor: "black",
                  width: "30%",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <h4 style={{ marginTop: 30 }}>How can we help you today?</h4>
              <textarea
                name="message"
                placeholder="Enter your answer here..."
                style={{
                  padding: 5,
                  borderWidth: 0,
                  borderBottomWidth: 2,
                  borderColor: "black",
                  width: "30%",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <div>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    values.email.length === 0 ||
                    values.name.length === 0 ||
                    values.message.length === 0
                  }
                  style={{
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 7,
                    padding: 8,
                    color: "white",
                    backgroundColor:
                      !isSubmitting &&
                      values.email.length > 0 &&
                      values.name.length > 0 &&
                      values.message.length > 0
                        ? "#2699FB"
                        : "#F6F6F6",
                    borderWidth: 0,
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Contact;
