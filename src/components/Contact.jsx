import React from "react";
import { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/manbweaq", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          form.reset();
        }
      })
      .catch((err) => {
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        I’d love to hear from you. Feel free to reach out!
      </p>

      {/* ✅ Show message if submitted */}
      {submitted ? (
        <p className="success-message">✅ Message sent successfully!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}

      <div className="divider">
        <span></span>
        <p>Or reach out via</p>
        <span></span>
      </div>

      <div className="social-icons">
        <a href="https://github.com/ankita34359" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-gupta-34359abcd/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:ankitagupta81768176@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Contact;
