import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./SignUp.css";
import { Formik } from "formik";

const SignUp = ({ promptModal }) => {
  function sendEmail(values) {
    emailjs
      .send("gmail", "email_sign_up", values, "user_UzI8BRxePHXK17d7ZGOAX")
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
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        sendEmail(values);
        actions.setSubmitting(false);
        actions.resetForm();
        promptModal(true);
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
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            style={{
              backgroundColor: "#F6F6F6",
              padding: 5,
              borderWidth: 3,
              borderRadius: 5,
              borderColor: "#E4E4E4",
              width: "30%",
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <button
            type="submit"
            disabled={isSubmitting && values.email.length > 0}
            style={{
              marginLeft: 10,
              borderRadius: 7,
              padding: 8,
              color: "white",
              backgroundColor:
                !isSubmitting && values.email.length > 0
                  ? "#2699FB"
                  : "#F6F6F6",
              borderWidth: 0,
            }}
          >
            Sign Up
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
