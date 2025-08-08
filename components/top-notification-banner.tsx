"use client"

import { useState } from "react"
import { X, Trophy, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TopNotificationBannerProps {
  onDismiss?: (dismissed: boolean) => void
}

export default function TopNotificationBanner({ onDismiss }: TopNotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-2 md:py-3 px-2 md:px-4 overflow-hidden shadow-lg transition-all duration-300">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating sparkles animation (less on mobile for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(typeof window !== "undefined" && window.innerWidth < 640 ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3 text-yellow-300 opacity-80" />
          </div>
        ))}
      </div>

      {/* Falling confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 20)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute w-1.5 h-1.5 md:w-2 md:h-2 animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#fbbf24', '#f59e0b', '#d97706', '#92400e', '#fde047', '#facc15'][Math.floor(Math.random() * 6)],
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-center text-center sm:text-left gap-1 sm:gap-2">
        <div className="flex items-center justify-center flex-shrink-0">
          <Trophy className="h-5 w-5 md:h-6 md:w-6 text-yellow-300 animate-pulse mr-1 sm:mr-2" />
          <span className="inline-block animate-pulse text-sm md:text-base">🎉</span>
        </div>

<div className="flex flex-wrap items-center justify-center text-xs sm:text-sm md:text-base leading-tight gap-1 font-bold">
  <span className="text-yellow-200 font-extrabold">Proud Moment:</span>
  <span>
    BehtarWay selected as one of the Top 5 Finalists by Toyota for{" "}
    <a
      href="https://sustainablecitieschallenge.org/varanasi"
      className="text-white underline font-extrabold"
      target="_blank"
      rel="noopener noreferrer"
    >
      Sustainable Cities Challenge Varanasi
    </a>
  </span>
  <span className="inline-block animate-pulse">🏆</span>
</div>


        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="text-white hover:bg-white/20 h-7 w-7 p-0 sm:ml-2 flex-shrink-0 absolute sm:relative top-1 right-1 sm:top-auto sm:right-auto"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 animate-pulse"></div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          25% { transform: translateY(-8px) rotate(90deg); opacity: 1; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-8px) rotate(270deg); opacity: 1; }
        }
        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-fall {
          animation: fall 6s linear infinite;
        }
      `}</style>
    </div>
  )
}
