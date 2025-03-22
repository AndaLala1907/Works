import React from "react";
import HeroPartnership from "@/components/Partnership/HeroPartnership";
import PartnershipsList from "@/components/Partnership/PartnershipsList";
import PartnershipTestimonials from "@/components/Partnership/PartnershipTestimonials";

const Partnership = () => {
  return (
    <div className="partnerships-page">
      <HeroPartnership />
      <PartnershipsList />
      <PartnershipTestimonials />
    </div>
  );
};
export default Partnership;
