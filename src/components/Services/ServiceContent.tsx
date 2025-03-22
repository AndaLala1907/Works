import { Service } from "@/data/serviceData";

interface ServiceDataProps {
  data: Service;
}

const ServiceContent: React.FC<ServiceDataProps> = ({ data }) => {
  return (
    <div className="service-content py-5">
      <div className="container w-75">
        <div className="overview py-3">
          <h5 className="section-headings text-center py-2">
            {data.overview.title}
          </h5>
          <p>{data.overview.content}</p>
        </div>

        <div className="threadDetection py-3">
          <h5 className="section-headings text-center py-2">
            {data.threadDetection.title}
          </h5>
          <p>{data.threadDetection.content}</p>
        </div>

        <div className="bestPractice py-3">
          <h5 className="section-headings text-center py-2">
            {data.bestPractice.title}
          </h5>
          <p>{data.bestPractice.content.subtitle}</p>

          <div className="tight-paragraphs">
            <p>{data.bestPractice.content.firstLine}</p>
            <p>{data.bestPractice.content.secondLine}</p>
            <p>{data.bestPractice.content.thirdLine}</p>
            <p>{data.bestPractice.content.fourthLine}</p>
            <p>{data.bestPractice.content.fifthLine}</p>
          </div>
        </div>

        <div className="conclusion py-3">
          <h5 className="section-headings text-center py-2">
            {data.conclusion.title}
          </h5>
          <p>{data.conclusion.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
