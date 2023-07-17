import React, { useState } from "react";
import "../../styles/pages.css";
import ThankYou from "./ThankYou";

export default function ContactMe({ formSubmitted, handleContactForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessageText, setErrorMessageText] = useState('');
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleNameInput = () => {
    let errorMessage = "";
  
    if (name === "") {
        errorMessage = "Please add your name!";
        setErrorMessageText(errorMessage);
    } else {
      setErrorMessageText("");
    }
  };

  const handleEmailInput = () => {
    let errorMessage = "";
  
    if (email === ""|| !emailRegex.test(email)) {
        errorMessage = "Please add a valid email address!";
        setErrorMessageText(errorMessage);
    } else {
      setErrorMessageText("")
    }
  };

  const handleMessageInput = () => {
    let errorMessage = "";
  
    if (message === "") {
        errorMessage = "Please add a message!";
        setErrorMessageText(errorMessage);
    } else {
      setErrorMessageText("");
    }
  };

  const handleSubmit = () => {
    handleContactForm();
    console.log(handleContactForm);
  }
  

  return (
    <div className="container-fluid page-container">
      <form id="contact-form" className="card">
        <div className="card-header">Contact Me</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name-input" className="form-label">
              Name:
            </label>
            <input
              id="name-input"
              type="text"
              className="form-control"
              required
              placeholder=""
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setErrorMessageText('')}
              onBlur={handleNameInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email-input" className="form-label">
              Email Address:
            </label>
            <input
              id="email-input"
              type="email"
              className="form-control"
              required
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setErrorMessageText('')}
              onBlur={handleEmailInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message-input" className="form-label">
              Message:
            </label>
            <textarea
              id="message-input"
              className="form-control"
              rows="3"
              required
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setErrorMessageText('')}
              onBlur={handleMessageInput}
            ></textarea>
          </div>
          <div id="error-message">
            {errorMessageText}
          </div>
          <button id="submit-button" type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
  }
