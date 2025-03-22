'use client'


import React from "react";
import { useState, useEffect } from "react";



const Contact = () => {
      // State to store form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  // Load saved data from localStorage on component mount
    useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
    }, []);

  // Save form data to localStorage on any state change
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formData); // Use formData as needed
  };


    return (
        <div className="contact py-5">
            <h3 className="text-center">Your Cybersecurity Experts – Securing the Future Today</h3>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-6 p-4">

                        <div className="main-heading ">
                            <h1 className="highlight py-3"><span>Contact us.</span></h1>
                            <h3>We are here to help you secure you future </h3>
                        </div>
                        <div className="py-4">
                            <p>Email: info@cyberg.com</p>
                            <p>Phone: +49 123 456 789</p>
                            <p>Address: Street, Berlin Germany</p>
                        </div>

                        <div>
                            <h3>What happens next?</h3>
                            <ol className="styled-list py-5">
                                <li data-step="1">
                                    <div className="text ">We’ll review your cybersecurity needs.</div>
                                </li>
                                <li data-step="2">
                                    <div className="text">You’ll receive a customized security proposal.</div>
                                </li>
                                <li data-step="3">
                                    <div className="text">Once approved, we’ll implement the solutions and support you.</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-md-6 p-4">
                        <form onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="mb-3">
                            <label htmlFor="fullName" className="form-label section-headings fs-5 py-2">
                                Full name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label  section-headings fs-5 py-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                required
                            />
                            </div>

                            {/* Phone */}
                            <div className="mb-3">
                            <label htmlFor="phone" className="form-label section-headings fs-5 py-2">
                                Telephone number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                required
                            />
                            </div>

                            {/* Country */}
                            <div className="mb-3">
                            <label htmlFor="country" className="form-label section-headings fs-5 py-2">
                                Select your country
                            </label>
                            <select
                                className="form-select"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your country</option>
                                <option value="Al">Albania</option>
                                <option value="Uk">United Kingdom</option>
                                <option value="Mkd">North Macedonia</option>
                                <option value="Germany">Germany</option>
                                
                            </select>
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                            <label htmlFor="message" className="form-label  section-headings fs-5 py-2">
                                Send us a Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows={8}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                required
                            ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary w-100">
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;