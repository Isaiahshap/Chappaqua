import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VenueIntro from "@/components/VenueIntro";
import UpcomingEvents from "@/components/UpcomingEvents";
import ImpactBand from "@/components/ImpactBand";
import FeatureCards from "@/components/FeatureCards";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <VenueIntro />
        <UpcomingEvents />
        <ImpactBand />
        <FeatureCards />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
