import React from "react";
import "../CSS Folders/contact.css";

const Contact = () => {
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
              <i className="fas fa-phone-square"></i> +91 9347****
            </p>

            <div className="socialicons">
              <a href="/">
                <i className="fab fa-facebook"></i>
              </a>

              <a href="/">
                <i className="fab fa-twitter-sq"></i>
              </a>

              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="/">
                <i className="fab fa-linkedin"></i>
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
              onClick={() =>
                alert(
                  "sorry as db is not conncected, please contact through a Gmail"
                )
              }
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
