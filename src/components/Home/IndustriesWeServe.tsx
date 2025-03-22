import Image from "next/image";
import Link from "next/link";

export default function IndustriesSection() {
  return (
    <div className="industries-container my-5 py-4">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h3 className="section-headings fw-bold">Industries We Serve</h3>
        <p>
          Protecting critical industries with cutting-edge cybersecurity
          solutions.
        </p>
      </div>

      {/* Icons with Dashed Line */}
      <div className="position-relative text-center py-3">
        {/* Dashed Line */}
        <div className="dashed-line"></div>

        {/* Icons Row */}
        <div className="container">
          <div className="row text-center justify-content-between align-items-center">
            <div className="col icon-container">
              <Link
                href="/industries#finance"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path7 (1).svg"
                  alt="Finance"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Finance</p>
              </Link>
            </div>
            <div className="col icon-container">
              <Link
                href="/industries#healthcare"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path15.svg"
                  alt="Healthcare"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Healthcare</p>
              </Link>
            </div>
            <div className="col icon-container">
              <Link
                href="/industries#government"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path9 (1).svg"
                  alt="Government"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Government</p>
              </Link>
            </div>
            <div className="col icon-container">
              <Link
                href="/industries#retail"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path11 (1).svg"
                  alt="Retail"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Retail</p>
              </Link>
            </div>
            <div className="col icon-container">
              <Link
                href="/industries#eGame"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path13 (1).svg"
                  alt="eGame"
                  width={50}
                  height={50}
                />
                <p className="mt-2">eGame</p>
              </Link>
            </div>
            <div className="col icon-container">
              <Link
                href="/industries#education"
                className="text-decoration-none text-dark"
              >
                <Image
                  src="/industries-icons/path17 (1).svg"
                  alt="Education"
                  width={50}
                  height={50}
                />
                <p className="mt-2">Education</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <a href="/contact" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </div>
  );
}
