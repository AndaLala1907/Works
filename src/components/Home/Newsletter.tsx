import React from "react";
import styles from "@/styles/Newsletter.module.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="container py-5 ">
        <div className="row  align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 ">
            <h3 className="px-3 section-headings">
              Stay informed with the latest threat insights delivered directly
              to your inbox through our Newsletter.
            </h3>
          </div>

          {/* Right Side: Input and Button */}
          <div className="col-md-6 ">
            <div className="text-end mx-auto">
              <input
                type="email"
                className={`form-control w-75 ms-auto bg-white ${styles.inputField}`}
                placeholder="✉️ Your Email Address"
                required
              />
              <button className="btn btn-primary mt-3 ">Join for Free</button>
            </div>
          </div>
        </div>
        {/* Divider Line */}
      </div>
    </div>
  );
};

export default Newsletter;
