import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import CatalogPreview from "@/components/CatalogPreview";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background transition-colors">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <CatalogPreview />
      <Sustainability />
      <Testimonials />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
