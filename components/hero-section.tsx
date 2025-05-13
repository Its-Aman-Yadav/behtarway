import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="/placeholder.svg?key=xy67s" alt="Crowded Varanasi street" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative h-32 w-32">
            <Image
              src="/images/behtar-way-logo.png"
              alt="Behtar-Way Logo"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Walk Smarter in Varanasi.</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8">
          Discover hidden gullies, avoid crowds, and reach your destination peacefully.
        </p>
        <Button className="bg-[#EA580C] hover:bg-orange-700 text-white text-lg px-8 py-6">
          Sign Up for Early Access
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Floating Sign Up button for mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Button className="bg-[#EA580C] hover:bg-orange-700 text-white rounded-full shadow-lg">Sign Up</Button>
      </div>
    </section>
  )
}
