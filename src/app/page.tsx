import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import WhoWeAre from "@/components/Home/WhoWeAre";
import VideoSection from "@/components/Home/VideoSection";
import IndustriesSection from "@/components/Home/IndustriesWeServe";
import Leadership from "@/components/Home/Leadership";
import Partners from "@/components/Home/Partners";
import ReachOut from "@/components/Home/ReachOut";
import ISOCertification from "@/components/Home/IsoCertification";
import Newsletter from "@/components/Home/Newsletter";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhoWeAre />
      <VideoSection />
      <IndustriesSection />
      <Leadership />
      <Partners />
      <ReachOut />
      <ISOCertification />
      <Newsletter />
      <Testimonials />
    </div>
  );
}
