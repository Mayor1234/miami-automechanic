import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PagesHeader from '../pagesHeader/PagesHeader';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

const pageData = {
  page: 'How Can We Help?',
  title: 'Contact Us',
};

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <PagesHeader pageData={pageData} />
      <div className="contact-container row">
        <div className="contact-left">
          <div className="contact-heading">
            <h2>Get in touch</h2>
            <p>
              If you have any questions or need help, please fill out the form
              below. We do our best to respond within 24 hours.
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-email">
              <span>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </span>
              <p>ioyeniyi0@gmail.com, ioyeniyi@yahoo.com </p>
            </div>
            <div className="contact-phone">
              <span>
                <FontAwesomeIcon icon={faPhone} className="icon" />
              </span>
              <p>08096430887, 08038074534</p>
            </div>
            <div className="contact-address">
              <span>
                <FontAwesomeIcon icon={faMapMarker} className="icon" />
              </span>
              <p>Udoudoma Avenue, Adjacent 100 Units Uyo, Aks.</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
