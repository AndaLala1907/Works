"use client";

import React, { useState } from "react";

function NewsletterSlider() {
  const cards = [
    {
      id: 1,
      title: "Iranian Hackers Breaching Critical Infrastructure",
      description:
        "Recent reports reveal that Iranian hackers are infiltrating critical infrastructure...",
      buttonText: "Read More",
    },
    {
      id: 2,
      title: "CISA Warns of Exploited Oracle Vulnerabilities",
      description:
        "The Cybersecurity and Infrastructure Security Agency (CISA) has issued a warning...",
      buttonText: "Read More",
    },
    {
      id: 3,
      title: "Arrest of USDoD Hacker Linked to Major Data Breaches",
      description:
        "Brazilian authorities have arrested a notorious hacker known as USDoD...",
      buttonText: "Read More",
    },
    {
      id: 4,
      title: "Ransomware Attack on Healthcare System",
      description:
        "A major healthcare provider experienced a ransomware attack...",
      buttonText: "Read More",
    },
    {
      id: 5,
      title: "Cybersecurity Threats in 2024",
      description: "Key cybersecurity threats to watch out for in 2024...",
      buttonText: "Read More",
    },
    {
      id: 6,
      title: "Global Security Trends",
      description: "An analysis of the latest trends in global security...",
      buttonText: "Read More",
    },
  ];

  const [bookmarked, setBookmarked] = useState<number[]>([]);

  // Toggle bookmark functionality
  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the number of visible cards based on screen size
  const getVisibleCards = () => {
    if (window.innerWidth <= 576) return 1; // 1 card for small screens
    if (window.innerWidth <= 992) return 2; // 2 cards for medium screens
    return 3; // 3 cards for large screens
  };

  const visibleCards = getVisibleCards();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= cards.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const progressWidth = ((currentIndex + 3) / cards.length) * 100;

  return (
    <div className="container-fluid carousel-container-newsletter ">
      <div className="container py-5">
        {/* Carousel */}
        <div className="row">
          <div className="col-md-3 d-flex align-items-end">
            <div
              className=" mx-5 bottom-div-link w-100 bottomLink"
              id="slider-link"
            >
              <a href="#" className="text-decoration-none bottomLink ">
                {" "}
                Read More
              </a>
            </div>
          </div>

          <div className="col-md-9">
            <div className="d-flex overflow-hidden">
              <div
                className="d-flex"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  transition: "transform 0.5s ease",
                  width: `${(cards.length / visibleCards) * 100}%`,
                }}
              >
                {cards.map((card) => (
                  <div
                    key={card.id}
                    id=" #newsSlider-card"
                    className="card mx-2"
                    style={{
                      flex: "0 0 30%",
                      maxWidth: "32.33%",
                    }}
                  >
                    {/* Bookmark Icon */}
                    <span
                      className="position-absolute top-0 end-0 m-2"
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                        color: bookmarked.includes(card.id)
                          ? "#f39c12"
                          : "#ccc",
                      }}
                      onClick={() => toggleBookmark(card.id)}
                    >
                      &#9646;
                    </span>
                    <div className="card-body d-flex flex-column justify-content-between ">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.description}</p>
                      <a className="btn btn-primary w-100">{card.buttonText}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons and Progress Bar */}
        <div className="d-flex align-items-center justify-content-between mt-3">
          {/* Progress Bar */}
          <div
            className="progress flex-grow-1 mx-3"
            style={{ height: "5px", backgroundColor: "white" }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progressWidth}%`, backgroundColor: "#FF6F0F" }}
              aria-valuenow={progressWidth}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>

          {/* Previous Button */}
          <button
            className="btn btn-primary mx-2"
            onClick={handlePrev}
            style={{ width: "50px" }}
          >
            {"<"}
          </button>
          {/* Next Button */}
          <button
            className="btn btn-primary"
            onClick={handleNext}
            style={{ width: "50px" }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSlider;
