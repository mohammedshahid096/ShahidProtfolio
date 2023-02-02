import React, { useState } from "react";
import "../CSS Folders/projects.css";
import work_1 from "../images/learning.jpg";
import work_2 from "../images/collegelearning.png";
import work_4 from "../images/waterwaste.png";
import work_5 from "../images/chatapplication.jpg";
import work_6 from "../images/weatherapp.jpg";

const Projects = () => {
  const [seemore, setseemore] = useState(false);
  const [true_or_false, settrue_or_false] = useState(true);
  const [btext, setbtext] = useState("See More");
  const seemorebutton = () => {
    if (true_or_false) {
      setseemore(true);
      setbtext("See Less");
      settrue_or_false(false);
    } else {
      setseemore(false);
      setbtext("See More");
      settrue_or_false(true);
    }
  };
  return (
    <div id="projects">
      <div className="container">
        <h1 className="subtitle">My Projects</h1>

        <div className="project-list">
          <div className="project-item">
            <img src={work_2} alt="" />
            <div className="viewhover">view Details</div>
            <div className="infoproject">
              <h3>Learning Guidance</h3>
              <p>
                A website designed to help college students access all resources
                and learn to code. This website provides a searchable feature to
                get documents for every subject in PDF format.
              </p>
              <p>
                <span>Skill:</span> React js, Bootstrap
              </p>
            </div>
          </div>

          <div className="project-item">
            <img src={work_1} alt="" />
            <div className="viewhover">view Details</div>
            <div className="infoproject">
              <h3>College results website</h3>
              <p>
                A website for faculty to manage student information. This portal
                provides an option to search for the student details with the
                student roll no. Upon entering the student roll no, details such
                as semester marks, number of backlogs, CGPA, etc.. will be
                displayed.
              </p>
              <p>
                <span>Skills:</span> Javascript,PHP,Jquery
              </p>
            </div>
          </div>

          <div className="project-item">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1631730161.jpg"
              alt=""
            />
            <div className="viewhover">view Details</div>

            <div className="infoproject">
              <h3>Voting management</h3>
              <p>
                A voting management system that helps both voters and
                candidates. The portal provides features such as sign-up, login
                and voting panel. The voters need to register first to vote. A
                voter can cast their vote only once, and the status is changed
                accordingly. The panel shows the number of votes for every
                candidate.
              </p>
              <p>
                <span>Skills:</span> Javascript, REST API
              </p>
            </div>
          </div>
          {seemore ? (
            <>
              <div className="project-item">
                <img src={work_4} alt="" />
                <div className="viewhover">view Details</div>

                <div className="infoproject">
                  <h3>Public Water Wastage Control</h3>
                  <p>
                    An IOT-based project focused on reducing the wastage of
                    water in public tanks. With the help of sensors and Arduino,
                    water wastage can be prevented and further help save the
                    environment.
                  </p>
                  <p>
                    <span>Skills:</span> Arduino IDE using C
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src={work_5} alt="" />
                <div className="viewhover">view Details</div>

                <div className="infoproject">
                  <h3>Chat Application</h3>
                  <p>
                    A web page chat application is created with php and with
                    jquery Ajax
                    <br />
                    In this project there is a login page(sign in),
                    registration(Sign Up), in home page all users list will be
                    displayed, in chat page individual messages can de send to
                    the other user
                  </p>
                  <p>
                    <span>Skills:</span> PHP, AJAX & Jquery
                  </p>
                </div>
              </div>

              <div className="project-item">
                <img src={work_6} alt="" />
                <div className="viewhover">view Details</div>

                <div className="infoproject">
                  <h3>Weather Application</h3>
                  <p>
                    on searching the place we get the forcast details of that
                    place
                  </p>
                  <p>
                    <span>Skills:</span> React js & REST Api's
                  </p>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <button
          id="seemoreprojects"
          onClick={() => seemorebutton(settrue_or_false)}
        >
          {btext}
        </button>
      </div>
    </div>
  );
};

export default Projects;
