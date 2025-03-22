"use client";

import React, { useState, useEffect } from "react";

const PartnershipTestimonials = () => {
  const testimonials = [
    {
      image: "/images/testimonials/image (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "Emily R.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/image (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "Linda T.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/image (3).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "Jessica M.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "Marla S.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "John D.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (3).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
      name: "Alfonso P.",
      rating: "★★★★★",
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
    <div className="testimonials-section container  mt-5 py-5">
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
              className="card mx-1 text-white"
              style={{ minWidth: "33%", maxWidth: "33%" }}
            >
              <div className="row d-flex justify-content-between card-body">
                <div className="col-lg-3 py-2 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid  rounded-circle"
                  />
                </div>
                <div className="col-lg-9">
                  <p>{testimonial.description}</p>
                  <h6 className="mb-0 d-flex justify-content-between px-2">
                    — {testimonial.name} <span>{testimonial.rating}</span>
                  </h6>
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

export default PartnershipTestimonials;
