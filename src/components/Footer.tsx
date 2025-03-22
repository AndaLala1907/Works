"use client";

import React, { useState, ChangeEvent } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false, // Add a state for the checkbox
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = e.target;
    const checked = (target as HTMLInputElement).checked;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(`Form Submitted! Subscription: ${formData.subscribe}`);
  };

  return (
    <footer>
      <div className="bg-black py-5 text-white">
        <div className="container">
          <div className="row">
            {/* First Part */}
            <div className="col-md-2 first-part py-2">
              <div className="mb-3 ">
                <img src="/images/Logo.png" alt="Logo" className="img-fluid" />
              </div>
              <div className="mb-2 py-5">
                <img
                  src="/images/footer/Ellipse 3.png"
                  alt="Certification 1"
                  className="img-fluid px-1 w-50 "
                />
                <img
                  src="/images/footer/image 3.png"
                  alt="Certification 1"
                  className="img-fluid px-1 w-50"
                />
              </div>
              <div className="text-center py-2 mb-2">
                <img
                  src="/images/footer/Rectangle 88.png"
                  alt="Certification 2"
                  className="img-fluid "
                />
              </div>
            </div>

            {/* Second Part */}
            <div className="col-md-4 footer-menu py-2 ">
              <div className="row row-cols-1 row-cols-sm-5 row-cols-md-3 ">
                <div className="col ">
                  <h5>Services</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/services/SIEM">
                        SIEM Threat Detection & Response
                      </a>
                    </li>
                    <li>
                      <a href="/services/PenetrationTesting">
                        Penetration Testing
                      </a>
                    </li>
                    <li>
                      <a href="/services/IncidentResponse">Incident Response</a>
                    </li>
                    <li>
                      <a href="/services/NetworkSecurity">Network Security</a>
                    </li>
                    <li>
                      <a href="/services/SecurityAwareness">
                        Security Awareness Training
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h5>About Us</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/about#missionStatement">Mission Statement</a>
                    </li>
                    <li>
                      <a href="/about#ourStory">Our Story</a>
                    </li>
                    <li>
                      <a href="/about#ourExpertize">Our Expertise</a>
                    </li>
                    <li>
                      <a href="/partnerships">Partnerships</a>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h5>Our Values</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/about#ourValues">Innovation</a>
                    </li>
                    <li>
                      <a href="/about#ourValues">Trust</a>
                    </li>
                    <li>
                      <a href="/about#ourValues">Excellence</a>
                    </li>
                    <li>
                      <a href="/about#ourValues">Collaboration</a>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h5>Team</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/about#ourFounders">Co-Founder & CXX</a>
                    </li>
                    <li>
                      <a href="/about#csSpecialists">
                        Cybersecurity Specialists
                      </a>
                    </li>
                    <li>
                      <a href="/about#saAdvisors">
                        Security Awareness Advisors
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <h5>Industries We Serve</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/industries#finance">Finance</a>
                    </li>
                    <li>
                      <a href="/industries#healthcare">Healthcare</a>
                    </li>
                    <li>
                      <a href="/industries#government">Government</a>
                    </li>
                    <li>
                      <a href="/industries#retail">Retail</a>
                    </li>
                    <li>
                      <a href="/industries#eGame">eGame</a>
                    </li>
                    <li>
                      <a href="/industries#education">Education</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Part */}
            <div className="col-md-3 third-part py-2">
              <h1 className="pb-3">
                Contact <span>Us</span>
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Message"
                    rows={2}
                    required
                  ></textarea>
                </div>

                {/* Checkbox */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="subscribe" className="form-check-label">
                    I would like to receive the newsletter.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            {/* Fourth Part */}
            <div className="col-md-3 py-2 map-section">
              <div className="mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.4560447594913!2d13.40141060190626!3d52.5180016550619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e1!3m2!1sen!2s!4v1732660319011!5m2!1sen!2s"
                  width="250"
                  height="160"
                  style={{ borderRadius: 10 }}
                  loading="lazy"
                  className="img-fluid"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mb-1">
                <i className="fa-solid fa-location-dot px-2"></i> Berlin,
                Germany
              </p>
              <p className="mb-1">
                <i className="fa-solid fa-phone-volume px-2"></i> 030/1232331
              </p>
              <p>
                <i className="fa-regular fa-envelope px-2"></i> info@cgd.org
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container">
        <div className="row bottom-section text-dark mt-4">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item ">
                <a href="#">Legal Notice</a>
              </li>
              <li className="list-inline-item px-3">
                <a href="#">Data Protection</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              <b> &copy; Cyberware Global Defense {new Date().getFullYear()}</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
