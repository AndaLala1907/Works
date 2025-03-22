import CsSpecialists from "@/components/AboutUs/CsSpecialists";
import HeroSection from "@/components/AboutUs/Hero";
import OurCertifications from "@/components/AboutUs/OurCertifications";
import OurFounders from "@/components/AboutUs/OurFounders";
import OurLocations from "@/components/AboutUs/OurLocations";
import SaAdvisors from "@/components/AboutUs/SaAdvisors";
import WhyUs from "@/components/AboutUs/WhyUs";



const About = () => {
    return(
        <div>
            <HeroSection />
            <OurLocations />
            <OurFounders />
            <CsSpecialists/>
            <SaAdvisors />
            <OurCertifications/>
            <WhyUs/>
        </div>
    )
}

export default About;