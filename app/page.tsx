"use client"

import { useState } from "react"
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
import AnnouncementModal from "@/components/announcement-modal"
import TopNotificationBanner from "@/components/top-notification-banner"

export default function Home() {
  const [bannerDismissed, setBannerDismissed] = useState(false)

  return (
    <>
      {/* Top Notification Banner - Fixed above navbar */}
      <TopNotificationBanner onDismiss={setBannerDismissed} />
      
      {/* Website Content - Dynamic top margin based on banner state */}
      <div className={`transition-all duration-300 ${bannerDismissed ? 'mt-16' : 'mt-20'}`}>
        <main className="flex min-h-screen flex-col bg-background-dark text-white">
          <Navbar bannerDismissed={bannerDismissed} />
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
      </div>
      
      {/* Announcement Modal - Overlays on top */}
      <AnnouncementModal />
    </>
  )
}
