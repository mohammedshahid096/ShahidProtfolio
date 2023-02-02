import React, { useRef } from "react";
import "../CSS Folders/header.css";

const Header = () => {
  let refvalue = useRef(null);
  const closemenu = () => {
    refvalue.current.style.right = "-70%";
  };

  const openmenu = () => {
    refvalue.current.style.right = "0";
  };
  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <h1 id="logo">
              {" "}
              <span>P</span>ortfolio
            </h1>

            <ul className="pt-2" id="slider" ref={refvalue}>
              <li>
                {" "}
                <a href="#header"> home</a>
              </li>
              <li>
                {" "}
                <a href="#about"> about </a>
              </li>
              <li>
                {" "}
                <a href="#projects">projects </a>
              </li>
              <li>
                {" "}
                <a href="/"> portfolio </a>
              </li>
              <li>
                {" "}
                <a href="#contact"> contact </a>
              </li>
              <li className="fas fa-times" onClick={closemenu}></li>
            </ul>
            <i className="fas fa-bars" id="menuicon" onClick={openmenu}></i>
          </nav>

          <div className="header-text">
            <p id="changinganimation">Web Developer</p>

            <h1>
              Hi, I'm <br /> <span>Mohammed Shahid</span> <br /> From Hyderabad
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
