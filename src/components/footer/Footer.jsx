import React from 'react';
import './footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../header/Logo';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top row">
        <div className="footer-top-wrapper">
          <div className="miami-info">
            <div className="company-logo">
              <Logo />
            </div>
            <div className="company-info">
              <p>
                Miami Automechanic was established to deliver a global standard
                automobile diagnosis and repair.
              </p>
              <div className="social-media-icons">
                <div className="social-icons-container">
                  <a href="https://www.twitter.com/realer231">
                    <FaFacebook className="social-icon" />
                  </a>

                  <a href="https://www.twitter.com/realer231">
                    <FaTwitter className="social-icon" />
                  </a>

                  <a href="https://www.instagram.com/realer231">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://www.instagram.com/realer231">
                    <FaYoutube className="social-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-services-footer">
            <h2>
              <span>Our</span> Services
            </h2>
            <ul>
              <li>Change Oil and Filter</li>
              <li>Engine Diagnosis</li>
              <li>Spare Parts Replacement</li>
              <li>Tune Up</li>
              <li>Auto Diagnosis Training</li>
            </ul>
          </div>
          <div className="quick-links">
            <h2>
              <span>More</span> links
            </h2>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about"> About Us</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>

              <li></li>
            </ul>
          </div>
          <div className="contact-info">
            <h2>
              <span>Our</span> Location
            </h2>
            <ul>
              <li>
                <span>Adress:</span>
                <p>Udoudoma Avenue, Adjacent 100 Units Uyo, Aks.</p>
              </li>
              <li>
                <span>Phone:</span>
                <p>08096430887, 08038074534</p>
              </li>
              <li>
                <span>E-mail:</span>
                <p>ioyeniyi0@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; {year} Miami Automechanic. All Right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
