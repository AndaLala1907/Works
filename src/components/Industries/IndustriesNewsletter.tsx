import React from "react";
import styles from "../../styles/Newsletter.module.css";

const IndustriesNewsletter = () => {
  return (
    <div className="industries-newsletter">
      <div className="container py-5 ">
        <div className="row  align-items-center">
          {/* Left Side: Text */}
          <div className="col-md-6 ">
            <h3>Not sure if we cover your industry?</h3>
            <h5 className=" section-headings">
              Cyber threats are constantly evolving, and every industry faces
              unique challenges. If you don’t see your sector listed or want to
              learn more about how we can tailor our solutions to your specific
              needs, we’re here to help. Contact us today, and let’s discuss how
              we can protect your business
            </h5>
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
        {/* Divider Line */}
      </div>
    </div>
  );
};

export default IndustriesNewsletter;
