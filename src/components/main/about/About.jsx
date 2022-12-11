import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss';

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about-container wow">
          <div className="about-left">
            <div className="about-left-bg-img">
              <div className="read-more">
                <div className="about-left-content">
                  <h2>
                    <span>Over 20+ Years</span>Experience
                  </h2>
                  <div className="about-btn-center">
                    <Link to="/about" className="about-link">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <h2>
                <span>About</span> Miami Automechanic
              </h2>
              <div className="content-center">
                <p>
                  Miami Automechanic was established to deliver a global
                  standard automobile diagnosis and repair. We offer a training
                  programme which involves learning basic fundamental skills of
                  how a vehicle works, function of different components, how to
                  perform diagnosis, basic maintenance and service repairs. We
                  offer a full range of garage services to vehicle owners in
                  Nigeria. Our professionals know how to handle a wide range of
                  car services. We strive to ensure that your vehicle will be
                  performing at its best before leaving our workshop.
                </p>

                <ul>
                  <li className="bullet">
                    We are one of the leading auto repair shops serving
                    customers across Nigeria.
                  </li>
                  <li className="bullet">
                    All mechanic services are performed by highly qualified
                    mechanics.
                  </li>
                  <li className="bullet">
                    Our Technician attend short courses on new industry
                    standards and techniques
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
