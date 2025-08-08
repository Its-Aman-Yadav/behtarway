"use client"

import { useState } from "react"
import { Trophy, Star, Award, DollarSign, Users, Sparkles, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => setIsOpen(false)

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />

          {/* Modal */}
          <div className="relative z-50 sm:max-w-lg w-[95vw] max-h-[80vh] flex flex-col bg-white rounded-lg shadow-2xl border overflow-hidden">
            {/* Close */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute top-2 right-2 z-50 h-6 w-6 p-0 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-800 rounded-full shadow-lg border"
            >
              <X className="h-3 w-3" />
            </Button>

            {/* Floating sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float-slow opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${4 + Math.random() * 2}s`,
                  }}
                >
                  <Sparkles className="h-4 w-4 text-orange-400" />
                </div>
              ))}
            </div>

            {/* Header */}
{/* Header */}
<div className="flex-shrink-0 p-4 pb-2 relative z-10">
  <div className="mb-3">
    <div className="flex items-center justify-between mb-3">
      {/* Banner image on the left */}
      <Image
        src="banner.jpg"
        alt="Banner"
        width={150}
        height={150}
        className="rounded-md shadow-md"
        priority
      />

      {/* Trophy centered */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-3 animate-pulse">
            <Trophy className="h-6 w-6 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1 animate-bounce">
            <Star className="h-3 w-3 text-orange-600" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full border border-orange-300 animate-pulse"></div>
        </div>
      </div>
    </div>

    <h2 className="text-center text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse">
      🎉 PROUD MOMENT! 🎉
    </h2>
  </div>

  {/* Badges */}
  <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-orange-100 px-2 py-1 rounded-full border border-orange-200 animate-bounce">
      <Award className="h-3 w-3 text-orange-600" />
      <span className="text-xs font-bold text-orange-700">Top 5 Finalist</span>
    </div>
    <div
      className="flex items-center gap-1 bg-gradient-to-r from-green-50 to-green-100 px-2 py-1 rounded-full border border-green-200 animate-bounce"
      style={{ animationDelay: "0.2s" }}
    >
      <DollarSign className="h-3 w-3 text-green-600" />
      <span className="text-xs font-bold text-green-700">$180,000 Grant</span>
    </div>
  </div>
</div>


            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 pb-4 relative z-10">
              <div className="space-y-4">
                {/* Main announcement image */}
                <div className="w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-lg blur-sm opacity-30 animate-pulse"></div>
                  <Image
                    src="vogic.png"
                    alt="VOGIC AI - Varanasi Finalist Announcement"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg relative z-10 shadow-xl"
                    priority
                  />
                </div>

                {/* Text */}
                <div className="text-center space-y-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-gray-900">
                      BehtarWay (VOGIC AI) - Top 5 Finalist
                    </h3>
                    <p className="text-sm font-bold text-orange-600">
                      {"Toyota's Varanasi Sustainable Cities Challenge"}
                    </p>
                    <p className="text-sm font-bold text-green-600 animate-pulse">
                      🏆 Awarded $180,000 Grant 🏆
                    </p>
                  </div>
                </div>

                {/* Finalists collage */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4 text-gray-600 animate-bounce" />
                    <span className="text-sm font-semibold text-gray-700">Among Elite Finalists</span>
                  </div>
                  <div className="w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg blur-sm opacity-20 animate-pulse"></div>
                    <Image
                      src="final.png"
                      alt="Meet the Varanasi Finalists of the Sustainable Cities Challenge"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg relative z-10 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 p-4 pt-2 relative z-10">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1 text-sm py-2 border hover:bg-gray-50"
                >
                  Continue to Website
                </Button>

                <a
                  href="https://sustainablecitieschallenge.org/varanasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-sm py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center rounded-md font-medium"
                >
                  🚀 Learn More
                </a>
              </div>
            </div>

            {/* Animations */}
            <style jsx>{`
              @keyframes float-slow {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
                50% { transform: translateY(-15px) rotate(180deg); opacity: 0.7; }
              }
              .animate-float-slow {
                animation: float-slow 5s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      )}
    </>
  )
}
