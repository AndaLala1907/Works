import React from "react";

const ServicesSection = () => {
  return (
    <div className="cards-section">
      <div className="container services py-5">
        {/* Titulli SERVICES */}
        <h1
          className="text-center"
          style={{ color: "#FF6F0F", fontWeight: "bold" }}
        >
          Services
        </h1>

        <div className="row py-2">
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path11.svg" alt="icon" />
                  <h5 className="card-title">
                    SIEM Threat Detection & Response
                  </h5>
                  <p className="card-text">
                    Our 24/7 monitoring services use AI-powered tools to detect
                    and neutralize threats before they can harm your business
                  </p>
                </div>
                <a href="/services/SIEM" className="btn btn-primary mt-5">
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path7.svg" alt="icon" />
                  <h5 className="card-title">Penetration Testing</h5>
                  <p className="card-text">
                    Identify and eliminate vulnerabilities in your network with
                    our comprehensive penetration testing services
                  </p>
                </div>
                <a
                  href="/services/PenetrationTesting"
                  className="btn btn-primary mt-5"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path9.svg" alt="icon" />
                  <h5 className="card-title">Incident Response</h5>
                  <p className="card-text">
                    In the event of a breach, our expert team reacts swiftly to
                    minimize damage and restore your systems quickly
                  </p>
                </div>
                <a
                  href="/services/IncidentResponse"
                  className="btn btn-primary mt-5"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-2">
          <div className="col p-2">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path17.svg" alt="icon" />
                  <h5 className="card-title">Network Security</h5>
                  <p className="card-text">
                    We offer end-to-end network security solutions, optimizing
                    your infrastructure while securing it against unauthorized
                    access
                  </p>
                </div>
                <a
                  href="/services/NetworkSecurity"
                  className="btn btn-primary mt-5"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path13.svg" alt="icon" />
                  <h5 className="card-title">Security Awareness Training</h5>
                  <p className="card-text">
                    Empower your employees to recognize and respond to potential
                    cyber threats. Our comprehensive security awareness programs
                    equip your workforce with the knowledge they need to prevent
                    attacks
                  </p>
                </div>
                <a
                  href="/services/SecurityAwareness"
                  className="btn btn-primary mt-5"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card">
              <div className="card-body">
                <div className="card-content">
                  <img src="/card-icons/path7 (2).svg" alt="icon" />
                  <h5 className="card-title">Vulnerability Management</h5>
                  <p className="card-text">
                    Identify, assess, and fix system weaknesses to reduce
                    security risks and enhance resilience.
                  </p>
                </div>
                <a href="#" className="btn btn-primary mt-5">
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
