import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import BuildingIdeas from "@/components/BuildingIdeas";
import Services from "@/components/Services";
import WhyClients from "@/components/WhyClients";
import ProjectsGallery from "@/components/ProjectsGallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <BuildingIdeas />
        <Services />
        <WhyClients />
        <ProjectsGallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
