import React, { useState } from "react";
import userprofile from "../images/shahidprofile.jpg";
import "../CSS Folders/about.css";

const About = () => {
  const [skills_usestate, setskills_usestate] = useState(true);
  const [education_usestate, seteducation_usestate] = useState(false);
  const [internship_usestate, setinternship_usestate] = useState(false);
  //   const [value, setvalue] = useState("");

  let title_links = document.getElementsByClassName("active-link");

  const change_title = (value) => {
    var temp = document.getElementById(value);
    for (var x of title_links) {
      x.classList.remove("active-link");
    }
    temp.classList.add("active-link");
    switch (value) {
      case "skills":
        setskills_usestate(true);
        seteducation_usestate(false);
        setinternship_usestate(false);
        break;
      case "education":
        setskills_usestate(false);
        seteducation_usestate(true);
        setinternship_usestate(false);
        break;
      case "internships":
        setskills_usestate(false);
        seteducation_usestate(false);
        setinternship_usestate(true);
        break;
      default:
    }
  };

  // const list_style = {
  //   listStyle: "disc",
  //   paddingLeft: "5px",
  // };
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={userprofile} alt="shahid's" />
          </div>

          <div className="about-col-2">
            <h1 className="about-subtitle">About Me</h1>
            <p>
              To enhance my professional skills, capabilities and knowledge in
              an organistation that recognizes the value of hard work and trusts
              me with responsibilites and chanllenges.
            </p>

            <div id="titles">
              <p
                className="titles_link active-link"
                id="skills"
                onClick={(e) => change_title("skills")}
              >
                skills
              </p>
              <p
                className="titles_link "
                id="education"
                onClick={() => change_title("education")}
              >
                education
              </p>
              <p
                className="titles_link"
                id="internships"
                onClick={() => change_title("internships")}
              >
                internships
              </p>
            </div>

            {skills_usestate ? (
              <div className="titles_data" id="skillsflex">
                <ul>
                  <li>
                    <span>Java</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>
                  <li>
                    <span>HTML & CSS</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>

                  <li>
                    <span>Javascript & React</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>

                  <li>
                    <span>PHP & Ajax & Jquery</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>

                <ul>
                  <li>
                    <span>Bootstrap</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>

                  <li>
                    <span>Patience & TeamWork</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>

                  <li>
                    <span>Team Leadership</span>
                    <br />
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            {education_usestate ? (
              <div className="titles_data">
                <ul>
                  <li>
                    <span>B.Tech</span>
                    <br />
                    Jaya Prakash Narayan College of Engineering
                    <br />
                    GPA - 6.9
                    <br />
                    2019 - Ongoing
                  </li>

                  <li>
                    <span>Intermediate</span>
                    <br />
                    Hyderabad Institution of Excellence
                    <br />
                    GPA - 9.1
                    <br />
                    2016 - 2017
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}

            {internship_usestate ? (
              <div className="titles_data">
                <ul>
                  <li>
                    <span>photoshooto : Web Developer</span>
                  </li>
                  <li>Feb 2022 - Apr 2022</li>
                  <li>
                    <span className="dot"></span> Assist in writing
                    well-designed, testable, efficient code by using best
                    software development practices.
                  </li>
                  <li>
                    <span className="dot"></span> Assist in creating website
                    layout/user interface by using standard HTML/CSS practices.
                  </li>
                  <li>
                    <span className="dot"></span> Assist in coding with Reactjs
                    Selected as Team Leader and awarded intern of the week.
                  </li>
                  <li>
                    <span className="dot"></span> was appreciated for my good
                    performance and was promoted to work with senior developers.
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
