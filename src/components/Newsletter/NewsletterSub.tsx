import React from "react";
import styles from "../../styles/Newsletter.module.css";

const NewsletterSub = () => {
  return (
    <div className="newsletter-sub">
      <div className="container py-5 ">
        <div className="row  align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 ">
            <h3>
              <span>Still haven't subscribed to our Newsletter.</span> Sign Up
              today and stay informed about online security and all the ways you
              can protect yourself or your business.{" "}
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
              <button className="btn btn-primary mt-3 ">
                Discuss Your Security Needs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSub;
