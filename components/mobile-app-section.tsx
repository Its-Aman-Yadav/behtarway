"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Navigation, Map, Bell, Compass } from "lucide-react"
import Image from "next/image"

export default function MobileAppSection() {
  const [activeTab, setActiveTab] = useState("navigation")

  return (
    <section id="mobile-app" className="py-20 bg-background-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="relative h-12 w-12">
              <Image
                src="/images/behtar-way-logo.png"
                alt="Behtar-Way Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tourist Mobile App</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the hidden paths of Varanasi with our intuitive mobile app designed for tourists and pilgrims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <Tabs defaultValue="navigation" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="navigation" className="data-[state=active]:bg-[#EA580C]">
                  <Navigation className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Navigation</span>
                </TabsTrigger>
                <TabsTrigger value="crowd" className="data-[state=active]:bg-[#EA580C]">
                  <Map className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Crowd Map</span>
                </TabsTrigger>
                <TabsTrigger value="alerts" className="data-[state=active]:bg-[#EA580C]">
                  <Bell className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Alerts</span>
                </TabsTrigger>
                <TabsTrigger value="discovery" className="data-[state=active]:bg-[#EA580C]">
                  <Compass className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Discovery</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="navigation" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Smart Navigation</h3>
                  <p className="text-gray-300">
                    Get personalized routes that avoid crowded areas and discover hidden pathways that traditional maps
                    don't show.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Turn-by-turn directions through narrow gullies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Offline maps for areas with poor connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Voice guidance in multiple languages</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="crowd" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Real-time Crowd Map</h3>
                  <p className="text-gray-300">
                    Visualize crowd density across Varanasi with our heat map powered by CCTV and sensor data.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Live updates on crowd levels</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Predictive analytics for upcoming events</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Color-coded paths based on congestion</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="alerts" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Smart Alerts</h3>
                  <p className="text-gray-300">
                    Receive timely notifications about changing conditions and important events.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Sudden crowd formation alerts</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Weather and safety notifications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Cultural event reminders</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="discovery" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Local Discovery</h3>
                  <p className="text-gray-300">
                    Explore hidden gems, local shops, and authentic experiences off the beaten path.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Curated recommendations from locals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Hidden temples and historical sites</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Authentic food and craft experiences</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Button className="bg-[#EA580C] hover:bg-orange-700 text-white">
                Download App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative max-w-[280px]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#EA580C]/20 to-transparent rounded-[40px] blur-xl"></div>
              <div className="relative bg-gray-900 rounded-[40px] border-4 border-gray-800 overflow-hidden shadow-2xl">
                <div className="pt-4 px-2 bg-black">
                  <div className="w-32 h-6 mx-auto bg-gray-800 rounded-full mb-2"></div>
                </div>
                <img
                  src="/placeholder.svg?key=69iiw"
                  alt="Behtar-Way Mobile App Interface"
                  className="w-full aspect-[9/16] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
