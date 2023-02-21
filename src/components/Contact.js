import React from "react";
import "../CSS Folders/contact.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Contact = (props) => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="leftcol">
            <h1>Contact Me</h1>
            <p>
              {" "}
              <i className="fas fa-envelope"></i>
              <a href="mailto:mohammedshahidnagodriya@gmail.com?subject=subject text">
                mohammedshahidnagodriya@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone-square"></i> +91 9347222304
            </p>

            <div className="socialicons">
              <a href="https://github.com/mohammedshahid096">
                {" "}
                <AiFillGithub />
              </a>

              <a href="https://twitter.com/Mohamme23803128?t=AIpAkDg1vrccl9yjSp4XqA&s=09">
                <AiFillTwitterSquare />
              </a>

              <a href="https://instagram.com/mohammedshahid096?igshid=NTE5MzUyOTU=">
                <AiFillInstagram />
              </a>

              <a href="https://www.linkedin.com/in/mohammed-shahid-9aa61222a">
                <AiFillLinkedin />
              </a>
            </div>
            <button className="downloadresume">
              <a
                href="https://drive.google.com/file/d/1aYSDMlWxSIEpflkTv0_ictrYCAXvcnsz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Download Resume{" "}
              </a>
            </button>
          </div>

          <div className="rightcol">
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button
              className="downloadresume"
              id="submitbtn"
              onClick={() => props.dbnotNotify(1)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
