import React from "react";

const WhoWeAre = () => {
  return (
    <div className="whoweare-section">
      <div className="container py-5">
        <div className="text-center mb-4">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            At Cyberware Global Defense (CGD), we are committed to protecting
            the digital future through innovative solutions that safeguard
            businesses from evolving cyber threats. Our expert team combines
            cutting-edge technology with a proactive approach to cybersecurity,
            ensuring that your organization remains secure, compliant, and
            resilient in the face of emerging challenges.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="highlight-box">
              <div className="box w-100">
                <i className="fa-regular fa-handshake px-2"></i>
                <p>
                  Trusted by over{" "}
                  <strong>
                    <br />
                    100+ Organizations
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="highlight-box">
              <div className="box w-100">
                <i className="fas fa-globe px-2"></i>
                <p>
                  Across{" "}
                  <strong>
                    <br />
                    50+ countries
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-3">
            <div className="highlight-box">
              <div className="box w-100">
                <i className="fas fa-microchip px-2"></i>
                <p>
                  Use 100% <strong>Innovative Technology</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
