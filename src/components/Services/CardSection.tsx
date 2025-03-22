import { Service } from "@/data/serviceData";
import Breadcrumbs from "./Breadcrumbs";

interface ServiceDataProps {
  data: Service;
}

const CardSection: React.FC<ServiceDataProps> = ({ data }) => {
  return (
    <div className="card-container-services py-5">
      <div className="container">
        <Breadcrumbs data={data.heroSection} />
        <div className="text-center pb-3">
          <h2 className="text-white text-decoration-underline pb-3">
            Key Features of{" "}
            <span className="text-decoration-underline">
              {data.cardSection.title}
            </span>
          </h2>
          <img src={data.cardSection.icon} alt="icon" />
        </div>

        <div className="row py-5">
          <div className="col-md-3">
            <div className="card bg-white text-dark text-center py-4">
              <div className="card-body">
                <h5 className="card-title section-headings">
                  {data.cardSection.card1.cardTitle}
                </h5>
                <p className="card-text">{data.cardSection.card1.cardDcp}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-white text-dark text-center py-4">
              <div className="card-body">
                <h5 className="card-title section-headings">
                  {data.cardSection.card2.cardTitle}
                </h5>
                <p className="card-text">{data.cardSection.card2.cardDcp}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-white text-dark text-center py-4">
              <div className="card-body">
                <h5 className="card-title section-headings">
                  {data.cardSection.card3.cardTitle}
                </h5>
                <p className="card-text">{data.cardSection.card3.cardDcp}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-white text-dark text-center py-4">
              <div className="card-body">
                <h5 className="card-title section-headings">
                  {data.cardSection.card4.cardTitle}
                </h5>
                <p className="card-text">{data.cardSection.card4.cardDcp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
