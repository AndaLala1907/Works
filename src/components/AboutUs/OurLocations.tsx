import React from "react";

const OurLocations = () => {
  return (
    <div className="our-location">
      <div className="our-location-bg">
        <div className="container text-white py-5 my-4">
          <div className="main-heading py-2 mb-4">
            <h1>
              <span>Our</span> Locations
            </h1>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 py-3">
              <div className="location-box">
                <h3 className="py-1">Germany</h3>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <address className="py-2">
                  Hohenzollernring No. 72 <br />
                  Köln <br />
                  50672
                </address>
              </div>
            </div>
            <div className="col-md-3 py-3">
              <div className="location-box">
                <h3 className="py-1">North Macedonia</h3>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <address className="py-2">
                  11th October No. 25 <br />
                  Skopje <br />
                  1000
                </address>
              </div>
            </div>
            <div className="col-md-3 py-3">
              <div className="location-box">
                <h3 className="py-1">Albania</h3>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <address className="py-2">
                  Ruga Myslym Shyri No. 37 <br />
                  Tirana <br />
                  1001
                </address>
              </div>
            </div>
            <div className="col-md-3 py-3">
              <div className="location-box">
                <h3 className="py-1">Turkey</h3>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <address className="py-2">
                  Istiklal Caddesi No. 45 <br />
                  Istanbul <br />
                  34430
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocations;
