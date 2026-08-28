import Header from "../organisms/Header";
import HeroSection from "../organisms/HeroSection";
import FeaturesSection from "../organisms/FeaturesSection";
import SolutionSection from "../organisms/SolutionSection";
import ReviewsSection from "../organisms/ReviewsSection";
import CtaSection from "../organisms/CtaSection";
import ArticlesSection from "../organisms/ArticlesSection";
import Footer from "../organisms/Footer";

export default function LandingPage() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <Header />
      <main className="mb-40 space-y-40">
        <HeroSection />
        <FeaturesSection />
        <SolutionSection />
        <ReviewsSection />
        <CtaSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}
