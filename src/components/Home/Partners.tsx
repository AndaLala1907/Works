import React from "react";
import styles from "@/styles/Partners.module.css";

const Partners = () => {
  const partners = [
    "/images/partners-logo/Group (1).svg",
    "/images/partners-logo/Google_2015_logo.svg.png",
    "/images/partners-logo/Group.svg",
    "/images/partners-logo/path7 (2).svg",
    "/images/partners-logo/Vector.svg",
    "/images/partners-logo/XMLID_20_.svg",
  ];

  return (
    <div className={`container ${styles.partnersSection} py-5 `}>
      <h2 className="text-center section-headings pt-5">Our Partners</h2>
      <div className={`${styles.marquee} py-5`}>
        <div className={`${styles.track} px-5`}>
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              height={"56px"}
              alt={`Partner ${index + 1}`}
              className={`img px-3 ${styles.logo}`}
            />
          ))}
          {partners.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              height={"56px"}
              alt={`Partner ${index + 1}`}
              className={`img px-3 ${styles.logo}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
