"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky-top">
      {/* Top Header */}
      <div className="top-header bg-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <img
              src="/images/logo.png"
              className="img-logo"
              alt="Logo"
              height="48px"
            />
          </div>

          <div className="top-links d-flex align-items-center" id="top">
            <span className="top-link ms-auto w-50 me-3">
              <b>Emergency Response Plan</b>
            </span>

            <div className="support-link ms-auto d-flex align-items-center">
              <span>
                <i className="fa-solid fa-circle-info d-sm-none mx-3"></i>
              </span>
              <span className="top-link mx-3 d-flex align-items-center">
                <b>Support</b> <i className="fa-solid fa-chevron-down ms-1"></i>
              </span>
            </div>

            <div className="input-group language-button ms-auto">
              <label className="input-group-text" htmlFor="inputGroupSelect02">
                <i className="fa fa-globe"></i>
              </label>
              <select className="form-select px-2" id="inputGroupSelect02">
                <option value="1" defaultValue={"EN"}>
                  EN
                </option>
                <option value="2">AL</option>
                <option value="3">MKD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href={"#"} className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-auto" id="navbarNav">
            <ul className="navbar-nav mx-auto p-3">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${
                    pathname === "/" ? "active-link" : ""
                  }`}
                >
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${
                    pathname === "/about" ? "active-link" : ""
                  }`}
                >
                  <b>About Us</b>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link d-flex align-items-center"
                  href="#"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <b>Services</b>
                  <i
                    className="fa-solid fa-chevron-down ms-1"
                    style={{ color: "#ff6f0f" }}
                  ></i>
                </Link>

                <div
                  className="dropdown-menu mega-menu"
                  aria-labelledby="servicesDropdown"
                >
                  <div className="container">
                    <div className="row gap-2">
                      <div className="col-md-2 d-flex flex-column text-dark justify-content-between">
                        <img
                          src="/card-icons/path11 (3).svg"
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <h5>SIEM Threat Detection & Response</h5>
                        <p>
                          Our 24/7 monitoring services use AI-powered tools to
                          detect and neutralize threats before they can harm
                          your business
                        </p>
                        <Link
                          href="/services/SIEM"
                          className="btn btn-primary btn-sm w-100"
                        >
                          Explore
                        </Link>
                      </div>
                      <div className="col-md-2 d-flex flex-column justify-content-between">
                        <img
                          src="/card-icons/path7 (3).svg"
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <h5>Penetration Testing</h5>
                        <p>
                          Identify and eliminate vulnerabilities in your network
                          with our comprehensive penetration testing services.
                        </p>
                        <Link
                          href="/services/PenetrationTesting"
                          className="btn btn-primary btn-sm w-100"
                        >
                          Explore
                        </Link>
                      </div>
                      <div className="col-md-2 d-flex flex-column justify-content-between">
                        <img
                          src="/card-icons/path9 (3).svg"
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <h5>Incident Response</h5>
                        <p>
                          In the event of a breach, our expert team reacts
                          swiftly to minimize damage and restore your systems
                          quickly.
                        </p>
                        <Link
                          href="/services/IncidentResponse"
                          className="btn btn-primary btn-sm w-100"
                        >
                          Explore
                        </Link>
                      </div>
                      <div className="col-md-2 d-flex flex-column justify-content-between">
                        <img
                          src="/card-icons/path17 (3).svg"
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <h5>Network Security</h5>
                        <p>
                          We offer end-to-end network security solutions,
                          optimizing your infrastructure while securing it
                          against unauthorized access.
                        </p>
                        <Link
                          href="/services/NetworkSecurity"
                          className="btn btn-primary btn-sm w-100"
                        >
                          Explore
                        </Link>
                      </div>
                      <div className="col-md-2 d-flex flex-column justify-content-between">
                        <img
                          src="/card-icons/path13 (3).svg"
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <h5>Security Awareness Training</h5>
                        <p>
                          Empower your employees to recognize and respond to
                          potential cyber threats.
                        </p>
                        <Link
                          href="/services/SecurityAwareness"
                          className="btn btn-primary btn-sm w-100"
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="/industries"
                  className={`nav-link d-flex align-items-center ${
                    pathname === "/industries" ? "active-link" : ""
                  }`}
                >
                  <b>Industries</b>
                  <i
                    className="fa-solid fa-chevron-down ms-1"
                    style={{ color: "#ff6f0f" }}
                  ></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/partnerships"
                  className={`nav-link d-flex align-items-center ${
                    pathname === "/partnerships" ? "active-link" : ""
                  }`}
                >
                  <b>Partnerships</b>
                  <i
                    className="fa-solid fa-chevron-down ms-1"
                    style={{ color: "#ff6f0f" }}
                  ></i>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto p-3">
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link border-on-click ${
                    pathname === "/contact" ? "active-link" : ""
                  }`}
                >
                  <b>Contact</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/jobs"
                  className={`nav-link border-on-click ${
                    pathname === "/jobs" ? "active-link" : ""
                  }`}
                >
                  <b>Jobs</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/newsletter"
                  className={`nav-link border-on-click ${
                    pathname === "/newsletter" ? "active-link" : ""
                  }`}
                >
                  <b>Newsletter</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
