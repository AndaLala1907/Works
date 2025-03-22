"use client";

import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/images/testimonials/image (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "Emily R.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/image (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "Linda T.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/image (3).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "Jessica M.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (1).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "Marla S.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (2).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "John D.",
      rating: "★★★★★",
    },
    {
      image: "/images/testimonials/Untitled design (3).png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      name: "Alfonso P.",
      rating: "★★★★★",
    },
  ];

  // 🎯 Shtojmë një state për numrin e kartave të dukshme
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const getVisibleCards = () => {
      if (window.innerWidth <= 576) return 1; // 1 kartë për ekran të vogël
      if (window.innerWidth <= 992) return 2; // 2 karta për ekran mesatar
      return 3; // 3 karta për ekran të madh
    };

    setVisibleCards(getVisibleCards()); // Vendos vlerën fillestare

    // 🎯 Event listener për ndryshimin e madhësisë së ekranit
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🎯 Automatikisht kalon në testimonial tjetër çdo 5 sekonda
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-section container mt-5 py-5">
      <h3 className="section-headings text-center mb-5">
        <b>Join our happy customers!</b>
      </h3>
      <div className="overflow-hidden position-relative">
        <div
          className="d-flex"
          style={{
            transform: `translateX(-${currentIndex * 30}%)`,
            transition: "transform 0.5s ease",
            width: `${(testimonials.length / visibleCards) * 100}%`,
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
                    alt={testimonial.name}
                    className="img-fluid rounded-circle"
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

export default Testimonials;
