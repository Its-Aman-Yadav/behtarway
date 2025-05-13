"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import LanguageSelector from "./language-selector"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 mr-2">
              <Image
                src="/images/behtar-way-logo.png"
                alt="Behtar-Way Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl">Behtar-Way</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#problem" className="text-white hover:text-orange-500 transition-colors">
            Problem
          </Link>
          <Link href="#vision" className="text-white hover:text-orange-500 transition-colors">
            Vision
          </Link>
          <Link href="#how-it-works" className="text-white hover:text-orange-500 transition-colors">
            How It Works
          </Link>
          <Link href="#mobile-app" className="text-white hover:text-orange-500 transition-colors">
            Tourist App
          </Link>
          <Link href="#dashboard" className="text-white hover:text-orange-500 transition-colors">
            City Dashboard
          </Link>
          <Link href="#outcomes" className="text-white hover:text-orange-500 transition-colors">
            Outcomes
          </Link>
          <LanguageSelector />
          <Button className="bg-[#EA580C] hover:bg-orange-700 text-white">Sign Up</Button>
        </div>

        <div className="md:hidden flex items-center">
          <LanguageSelector />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4 text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark/95 backdrop-blur-md">
          <div className="px-4 py-2 space-y-3">
            <Link
              href="#problem"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </Link>
            <Link
              href="#vision"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </Link>
            <Link
              href="#how-it-works"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#mobile-app"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tourist App
            </Link>
            <Link
              href="#dashboard"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              City Dashboard
            </Link>
            <Link
              href="#outcomes"
              className="block text-white hover:text-orange-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Outcomes
            </Link>
            <Button className="w-full bg-[#EA580C] hover:bg-orange-700 text-white">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
