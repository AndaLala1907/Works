import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const industries = [
    { name: "Finance", link: "/industries/#finance" },
    { name: "Healthcare", link: "/industries/#healthcare" },
    { name: "Retail", link: "/industries/#retail" },
    { name: "Government", link: "/industries/#government" },
    { name: "Game", link: "/industries/#eGame" },
    { name: "Education", link: "/industries/#education" },
  ];

  return (
    <div className="hero-section">
      {/* Hero Background */}
      <div className="hero-bg  py-5">
        {/* Container for Text and Buttons */}
        <div className="container text-white d-flex flex-column justify-content-center">
          {/* Top Text */}
          <div className="top-text">
            <h5>Your Cybersecurity Experts</h5>
            <p>Securing the Future Today</p>
          </div>

          {/* Main text */}
          <div className="heading-container">
            <div className="main-heading ">
              <h1>
                Tailored, <span className="highlight">AI-driven solutions</span>{" "}
                to protect your business
              </h1>
              <p className="mb-5">
                Protecting the digital future through innovative cybersecurity
                solutions, we empower businesses to safeguard their assets,
                ensure compliance, and maintain trust in an increasingly
                connected world.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="row d-flex justify-content-center  mb-4 py-4 ">
            <div className="col-md-4 col-sm-6 col-12 text-md-end p-2">
              <Link href={"/contact"} className="btn btn-secondary">
                <img
                  src="/images/btn-image.svg"
                  alt="consultant"
                  width={22}
                  height={22}
                  className="me-2"
                />
                Free Consultation
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 col-12 text-md-start p-2">
              <Link href={"/contact"} className="btn btn-primary p-2 px-4">
                Get Started Today
              </Link>
            </div>
          </div>

          {/* Industry Links */}
          <div className="d-flex justify-content-between gap-3 flex-wrap pt-2">
            {industries.map((industry) => (
              <Link
                key={industry.name}
                href={industry.link}
                className="text-white industry-link"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
