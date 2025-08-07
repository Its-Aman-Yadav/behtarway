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
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 text-white py-3 px-4 overflow-hidden shadow-lg transition-all duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Floating sparkles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
            <Sparkles className="h-3 w-3 text-yellow-300 opacity-80" />
          </div>
        ))}
      </div>
      {/* Falling confetti particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute w-2 h-2 animate-fall"
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
      {/* One-line, centered content */}
      <div className="container mx-auto relative z-10 flex items-center justify-center w-full">
        <Trophy className="h-6 w-6 text-yellow-300 animate-pulse mr-2 flex-shrink-0" />
        <span className="inline-block animate-pulse text-base md:text-lg mr-2">🎉</span>
        <span className="text-yellow-200 font-extrabold text-base md:text-lg mr-2">Proud Moment:</span>
        <span className="text-sm md:text-base lg:text-lg font-bold leading-tight text-center mx-2 whitespace-nowrap">
          BehtarWay selected as Top 5 Finalist in{" "}
          <a
            href="https://sustainablecitieschallenge.org/varanasi"
            className="text-white underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toyota's Varanasi Sustainable Cities Challenge
          </a>
        </span>
        <span className="inline-block animate-pulse text-base md:text-lg ml-2">🏆</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className="text-white hover:bg-white/20 h-8 w-8 p-0 ml-2 flex-shrink-0"
          aria-label="Dismiss notification"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      {/* Animated border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 animate-pulse"></div>
      {/* Custom CSS for animations */}
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
