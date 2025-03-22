import React from "react";
import ServiceHeroSection from "@/components/Services/ServiceHero";
import serviceData from "@/data/serviceData";
import { Service, ServiceKey } from "@/data/serviceData";
import CardSection from "@/components/Services/CardSection";
import ServiceContent from "@/components/Services/ServiceContent";

interface ServicePageProps {
  params: {
    id: string; // Dynamic parameter
  };
}

const Home = ({ params }: ServicePageProps) => {
  const { id } = params;

  // Type-guard and fetch the service data
  const isValidServiceKey = (key: string): key is ServiceKey => {
    return key in serviceData;
  };

  const currentService: Service | undefined = isValidServiceKey(id)
    ? serviceData[id]
    : undefined;

  if (!currentService) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="services">
      <ServiceHeroSection data={currentService.heroSection} />
      <CardSection data={currentService} />
      <ServiceContent data={currentService} />
    </div>
  );
};

export default Home;
