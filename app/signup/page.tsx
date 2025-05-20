"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    consent: false,
  })
  const [errors, setErrors] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
  })
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, consent: checked }))
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      valid = false
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required"
      valid = false
    } else if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (validateForm()) {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/2kvofdmv114nl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            fullName: formData.fullName,
            mobileNumber: formData.mobileNumber,
            email: formData.email,
            consent: formData.consent ? "Yes" : "No",
          },
        }),
      })

      console.log({
  Name: formData.fullName,
  Number: formData.mobileNumber,
  Email: formData.email,
  consent: formData.consent ? "Yes" : "No",
})


      if (response.ok) {
        setShowConfirmation(true)
        // Reset form
        setFormData({
          fullName: "",
          mobileNumber: "",
          email: "",
          consent: false,
        })
      } else {
        console.error("Failed to submit data to SheetDB")
      }
    } catch (err) {
      console.error("Error submitting form:", err)
    }
  }
}


  const handleCloseConfirmation = () => {
    setShowConfirmation(false)
  }

  return (
    <div className="min-h-screen bg-background-dark flex flex-col">
      {/* Use the same Navbar as the home page */}
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-24 flex justify-center items-center">
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 p-8">
          <div className="flex justify-center mb-8">
            <div className="relative h-16 w-16">
              <Image
                src="/images/behtar-way-logo.png"
                alt="Behtar-Way Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Get Exclusive Access to Behtar-Way for Varanasi
            </h1>
            <p className="text-gray-300">
              Walk smarter through Varanasi's hidden lanes. Sign up now to get access to the Behtar-Way app before
              anyone else.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-200">
                Full Name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#EA580C] focus:ring focus:ring-[#EA580C]/20 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobileNumber" className="text-gray-200">
                Mobile Number
              </Label>
              <div className="flex">
                <div className="bg-gray-700/70 flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 text-gray-300">
                  +91
                </div>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your 10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className={`rounded-l-none bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#EA580C] focus:ring focus:ring-[#EA580C]/20 ${
                    errors.mobileNumber ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.mobileNumber && <p className="text-red-400 text-sm">{errors.mobileNumber}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className={`bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#EA580C] focus:ring focus:ring-[#EA580C]/20 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={handleCheckboxChange}
                className="border-gray-500 data-[state=checked]:bg-[#EA580C] data-[state=checked]:border-[#EA580C]"
              />
              <Label htmlFor="consent" className="font-normal text-sm leading-tight cursor-pointer text-gray-300">
                I consent to receive updates and messages about Behtar-Way via WhatsApp.
              </Label>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-[#EA580C] hover:bg-orange-700 text-white py-6 rounded-md shadow-md transition-all hover:shadow-lg"
              >
                Get Access
              </Button>
            </div>
          </form>

          {/* Confirmation Dialog */}
          <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <DialogContent className="sm:max-w-md rounded-lg bg-gray-800 border border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle className="text-center text-xl text-white">Thank You!</DialogTitle>
                <DialogDescription className="text-center pt-2 text-gray-300">
                  Thank you! You'll receive your Behtar-Way access link and updates shortly.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center pt-4">
                <Button onClick={handleCloseConfirmation} className="bg-[#EA580C] hover:bg-orange-700 text-white px-8">
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>

      {/* Use the same Footer as the home page */}
      <Footer />
    </div>
  )
}
