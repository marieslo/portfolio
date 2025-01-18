import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactEmail.css";

export default function ContactEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "your_service_id", // EmailJS service ID
        "your_template_id", // EmailJS template ID
        templateParams,
        "your_public_api_key" // EmailJS public API key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact-form" className="contact-form-section">
      <div className="form-container">
      <div className="image-container">
        <img className="mail-icon" src="/public/icons/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png" />
      </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="left-side">
            <label>
              Your name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Your email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="right-side">
            <label>
              Type your message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            <button type="submit" className="submit-btn">Send an email</button>
          </div>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
}
