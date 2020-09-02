import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DisplayPage from "./components/DisplayPage";
import Footer from "./components/Footer";
import TermsPrivacy from "./components/TermsPrivacy";
import ScrollToTop from "./components/ScrollToTop";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={DisplayPage} />
          <Route path="/terms_privacy" component={TermsPrivacy} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
