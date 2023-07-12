import React from "react";
import "../../styles/pages.css";

export default function ContactMe() {
  return (
    <div className="container-fluid page-container">
      <div className="card">
        <div className="card-header">Contact Me</div>
        <div className="card-body">
          <div className="mb-3">
            <label for="name-input" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name-input"
              placeholder=""
            />
          </div>
          <div className="mb-3">
            <label for="email-input" className="form-label">
              Email Address:
            </label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="message-input" className="form-label">
              Message:
            </label>
            <textarea
              className="form-control"
              id="message-input"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
