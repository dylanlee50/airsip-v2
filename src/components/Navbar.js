import React, { useState } from "react";
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
                <button
                  onClick={() => setModalIsOpen(true)}
                  id="contact-button"
                  style={{
                    backgroundColor: "rgb(0,0,0,0)",
                    color: "white",
                    borderWidth: 0,
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setModalIsOpen(false)}
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
              <Contact modalVisible={setModalIsOpen} />
            </Modal>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
