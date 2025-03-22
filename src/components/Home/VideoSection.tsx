import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5">
      {/* Video Section */}
      <div className="row video-row align-items-center">
        {/* Left Column */}
        <div className="col-md-6">
          <h2 className="section-headings fw-bold">
            Always On Guard: Your 24/7 Online Security Solution for Unmatched
            Protection
          </h2>
          <div className="d-flex  gap-4 mt-4 py-4">
            <a href="/services/SIEM" className="btn btn-secondary">
              Explore Our Services
            </a>
            <a href="/contact" className="btn btn-primary">
              Book a Demo
            </a>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <Image
              src={"/64c4ed89072bdf5aa45ef094533bce2b.gif"}
              alt="Cybersecurity demo"
              width={500}
              height={280}
              className="img-fluid embed-responsive-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
