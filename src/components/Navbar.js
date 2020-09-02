import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Modal from "react-modal";
import Contact from "./Contact";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Airsip
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                {/* <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                > */}
                <button
                  onClick={() => setModalIsOpen(true)}
                  id="contact-button"
                >
                  Contact
                </button>
                {/* </Link> */}
              </li>
            </ul>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
            >
              <Contact />
            </Modal>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
