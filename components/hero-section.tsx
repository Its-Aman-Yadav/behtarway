"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HeroSection() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push("/signup")
  }

  return (
    <main role="main" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with alt text for SEO and screen readers */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="relative w-full h-full">
          <Image
            src="/bg.jpg"
            alt="Crowded Varanasi street showing pedestrians navigating narrow gullies"
            fill
            className="object-cover blur-sm scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Hero content */}
      <section
        aria-label="Behtar‑Way Hero Section"
        className="container mx-auto px-4 z-20 text-center"
      >
        {/* Logo with descriptive alt */}
        <div className="flex justify-center mb-8">
          <div className="relative h-32 w-32">
            <Image
              src="/images/behtar-way-logo.png"
              alt="Behtar‑Way logo - AI pedestrian navigation app for Varanasi"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>

        {/* h1 with primary SEO keywords */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Behtar‑Way: AI Pedestrian Navigation in Varanasi
        </h1>

        {/* h2 with secondary long-tail keywords */}
        <h2 className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
          Discover hidden gullies, avoid crowd congestion, and navigate sacred streets safely — Behtar‑Way is your smart walking companion in Kashi.
        </h2>

        <Button
          onClick={handleRedirect}
          aria-label="Sign up for Behtar‑Way navigation app"
          className="bg-[#EA580C] hover:bg-orange-700 text-white text-lg px-8 py-6"
        >
          Get Access
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Floating CTA on mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleRedirect}
          aria-label="Mobile sign up for Behtar‑Way"
          className="bg-[#EA580C] hover:bg-orange-700 text-white rounded-full shadow-lg"
        >
          Sign Up
        </Button>
      </div>
    </main>
  )
}
