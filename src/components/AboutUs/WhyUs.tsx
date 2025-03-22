"use client";

import React, { useState, useEffect } from "react";

const WhyUs = () => {
  const testimonials = [
    {
      image: "/images/image (4).png",
      company: "A small rural hospital",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      image: "/images/image (4).png",
      company: "A small rural hospital",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      image: "/images/image (4).png",
      company: "A small rural hospital",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      image: "/images/image (4).png",
      company: "A small rural hospital",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      image: "/images/image (4).png",
      company: "A small rural hospital",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
    {
      image: "/images/image (4).png",
      company:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      challange:
        "Difficulty in managing patient records and scheduling appointments due to outdated systems",
      solution:
        "Implemented an Electronic Health Record (EHR) system integrated with telemedicine capabilities",
      outcome:
        " Improved patient care, reduced medical errors, increased patient satisfaction, and expanded access to healthcare services in remote areas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-section why-us-section container mt-5 py-5">
      <h2
        className="section-headings text-center mb-5"
        style={{ color: "black" }}
      >
        <b>Discover why our clients continue to choose us.</b>
      </h2>
      <div className="overflow-hidden position-relative">
        <div
          className="d-flex"
          style={{
            transform: `translateX(-${currentIndex * 30}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card mx-1"
              style={{ minWidth: "33%", maxWidth: "33%" }}
            >
              <div className="row d-flex justify-content-between card-body">
                <div className="col-lg-3 py-2 text-center">
                  <img
                    src={testimonial.image}
                    alt="img"
                    className="img-fluid  rounded-circle"
                  />
                </div>
                <div className="col-lg-9">
                  <p>
                    <strong>Company:</strong>
                    {testimonial.challange}
                  </p>
                  <p>
                    <strong>Challange:</strong>
                    {testimonial.challange}
                  </p>
                  <p>
                    <strong>Solution:</strong>
                    {testimonial.solution}
                  </p>
                  <p>
                    <strong>Outcome:</strong>
                    {testimonial.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="controls mt-3 d-flex align-items-center justify-content-between">
        <div className="scrollbar w-100">
          <div
            className="scrollbar-progress"
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }}
          ></div>
        </div>
        <div className="w-25 d-flex justify-content-around ">
          <button
            className="btn btn-primary w-25 text-dark fs-4"
            onClick={handlePrev}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="btn btn-primary w-25 text-dark fs-4"
            onClick={handleNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
