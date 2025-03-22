import React from "react";

const ISOCertification = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Icon Section */}
        <div className="col-md-6 text-center py-5">
          <img
            src="/images/path7.png"
            alt="ISO Icon"
            height={"320px"}
            className="img-fluid"
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-6">
          <h3 className="section-headings">ISO Certification</h3>
          <p className="fw-bold pb-2">
            At <span>CYBERWARE Global Defense</span>, we are proud to be ISO
            certified, demonstrating our commitment to the highest standards of
            cybersecurity. Our certification reflects our dedication to
            protecting your data and ensuring robust security practices across
            all operations. Trust us to safeguard your digital assets with
            proven excellence.
          </p>

          {/* Certification Links */}

          <ul className="list-group border border-0 mb-3">
            <li className=" list-group-item rounded-0 border border-black border-start-0 border-end-0 p-1">
              <a
                href="#"
                className="btn btn-outline-secondary border border-0 w-100 d-flex justify-content-between align-items-center"
              >
                ISO/IEC 27000 – Information Security Management Systems{" "}
                <span>
                  <i className="fa-solid fa-angle-right "></i>
                </span>
              </a>
            </li>
            <li className=" list-group-item rounded-0 border border-black border-start-0 border-end-0 p-1">
              <a
                href="#"
                className="btn btn-outline-secondary border border-0   w-100 d-flex justify-content-between align-items-center"
              >
                ISO/IEC 27001 – Information Technology – Security Techniques{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
            <li className=" list-group-item rounded-0 border border-black border-start-0 border-end-0 p-1">
              <a
                href="#"
                className="btn btn-outline-secondary border border-0  w-100 d-flex justify-content-between align-items-center"
              >
                ISO/IEC 27002 – Code of Practice for Information Security
                Controls{" "}
                <span>
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </a>
            </li>
          </ul>

          {/* See All Certifications Button */}
          <div className="text-end py-5">
            <a href="#" className="btn btn-primary">
              See All Certifications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ISOCertification;
