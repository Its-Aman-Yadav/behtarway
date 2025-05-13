"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg?key=yu9m6",
    alt: "Quiet shaded gully in Varanasi",
  },
  {
    src: "/placeholder.svg?key=ja1i8",
    alt: "Peaceful narrow lane in Varanasi",
  },
  {
    src: "/placeholder.svg?key=99qc1",
    alt: "Hidden pathway in Varanasi",
  },
]

export default function VisionSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="vision" className="py-20 bg-background-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Vision</h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
            <img
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Behtar-Way reveals the hidden Varanasi — one lane at a time.
                </h3>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-background-dark rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-background-dark rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#EA580C]/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EA580C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Less Congestion</h3>
            <p className="text-gray-300">Distribute foot traffic across more paths to reduce overcrowding.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#EA580C]/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EA580C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safer Walks</h3>
            <p className="text-gray-300">Avoid crowded areas for a more peaceful and secure journey.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#EA580C]/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EA580C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M8 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M18 6v12" />
                <path d="M18 18h-3" />
                <path d="M8 15v3" />
                <path d="M5 18h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Revived Local Markets</h3>
            <p className="text-gray-300">Bring visitors to hidden gems and support local businesses.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
