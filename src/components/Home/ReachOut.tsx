import React from "react";
import styles from "@/styles/ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={`${styles.sectionContainer} py-5`}>
      <div className={`${styles.box} p-5 py-5 container  w-75`}>
        <div className="w-75 text-center mx-auto">
          <h3 className="text-white pb-4 ">
            Reach out to our team at CGD, and we'll help you protect your
            digital future.
          </h3>
          <form className="d-flex justify-content-center align-items-center">
            <input
              type="email"
              className={`form-control rounded-0 bg-white ${styles.inputField}`}
              placeholder="Email Address"
              required
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={styles.redLine}></div>
    </div>
  );
};

export default ContactSection;
