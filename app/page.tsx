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
      {/* 🔔 Notification Banner (can impact SEO title placement on scroll) */}
      <TopNotificationBanner onDismiss={setBannerDismissed} />

      {/* 🚀 Page Container */}
      <div className={`transition-all duration-300 ${bannerDismissed ? "mt-16" : "mt-20"}`}>
        <main role="main" className="flex min-h-screen flex-col bg-background-dark text-white">
          
          {/* 🔗 Sticky Navigation */}
          <Navbar bannerDismissed={bannerDismissed} />

          {/* 🏁 Hero Section — Contains <h1> and primary keywords */}
          <HeroSection />

          {/* 🧩 Problem Statement — Crowd, congestion, city mobility */}
          <section aria-label="The Problem Behtar-Way Solves">
            <ProblemSection />
          </section>

          {/* 🌟 Vision & Mission — Smart Mobility & City Impact */}
          <section aria-label="Our Vision for Smart Navigation in Varanasi">
            <VisionSection />
          </section>

          {/* 🔍 How It Works — AI, Maps, Real-time crowd data */}
          <section aria-label="How Behtar-Way Works for Pedestrian Navigation">
            <HowItWorksSection />
          </section>

          {/* 📱 Mobile App Features */}
          <section aria-label="Behtar-Way Mobile App for Android and Web">
            <MobileAppSection />
          </section>

          {/* 📊 Dashboard Insights for Admins & Authorities */}
          <section aria-label="Smart Dashboard and Analytics for Crowd Monitoring">
            <DashboardSection />
          </section>

          {/* 📈 Real Outcomes & Impact Stories */}
          <section aria-label="Impact and Outcomes of Behtar-Way in Varanasi">
            <OutcomesSection />
          </section>

          {/* 📬 CTA for Signup / Early Access */}
          <section aria-label="Call to Action - Get Early Access to Behtar-Way">
            <CtaSection />
          </section>

          {/* 🧭 Footer with Contact, Links */}
          <Footer />
        </main>
      </div>

      {/* 📢 Announcement Modal (for launches or updates) */}
      <AnnouncementModal />
    </>
  )
}
