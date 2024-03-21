import AboutUsSection from "./AboutUsSection";
import FAQSection from "./FAQSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import HowCanHelpSection from "./HowCanHelpSection";
import SupplySection from "./SupplySection";
import TestimonialSection from "./TestimonialSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SupplySection />
      <TestimonialSection />
      <GallerySection />
      <AboutUsSection />
      <HowCanHelpSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;