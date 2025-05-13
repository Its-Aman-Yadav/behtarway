import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import VisionSection from "@/components/vision-section"
import HowItWorksSection from "@/components/how-it-works-section"
import MobileAppSection from "@/components/mobile-app-section"
import DashboardSection from "@/components/dashboard-section"
import OutcomesSection from "@/components/outcomes-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background-dark text-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <HowItWorksSection />
      <MobileAppSection />
      <DashboardSection />
      <OutcomesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
