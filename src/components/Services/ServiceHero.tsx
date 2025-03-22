import React from "react";
import { HeroSection } from "@/data/serviceData";

interface HeroSectionProps {
  data: HeroSection;
}

const ServiceHeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const [firstWord, ...restOfTitle] = data.title.split(" ");

  return (
    <div className="service-hero-section ">
      <div className="container text-white text-center d-flex flex-column justify-content-center align-items-center">
        <div className="main-heading">
          <h1>
            <span className="highlight">{firstWord}</span>{" "}
            {restOfTitle.join(" ")}
          </h1>
        </div>
        <div className="sub-title-hero w-75 my-5">
          <p className="p-4">{data.subTitle}</p>
        </div>
        <a href="#" className="btn btn-primary p-2 px-4">
          Get a Demo
        </a>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
