"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, PieChart, Activity, Users } from "lucide-react"
import Image from "next/image"

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState("analytics")

  return (
    <section id="dashboard" className="py-20 bg-background-dark text-white border-t border-white/10">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">City Walkability Sense Dashboard</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering city administrators with real-time insights and powerful tools to manage pedestrian flow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <div className="bg-gray-900 p-3 border-b border-gray-700 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <div className="ml-4 text-sm text-gray-400">City Walkability Sense Dashboard</div>
              </div>
              <img
                src={`/placeholder.svg?height=600&width=800&query=city+dashboard+interface+with+heatmap+of+crowd+movement+in+Varanasi+with+data+visualization`}
                alt="City Walkability Sense Dashboard"
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          <div>
            <Tabs defaultValue="analytics" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="analytics" className="data-[state=active]:bg-[#EA580C]">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="monitoring" className="data-[state=active]:bg-[#EA580C]">
                  <Activity className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Monitoring</span>
                </TabsTrigger>
                <TabsTrigger value="planning" className="data-[state=active]:bg-[#EA580C]">
                  <PieChart className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Planning</span>
                </TabsTrigger>
                <TabsTrigger value="management" className="data-[state=active]:bg-[#EA580C]">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Management</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Advanced Analytics</h3>
                  <p className="text-gray-300">
                    Comprehensive data analysis tools to understand pedestrian movement patterns and identify
                    bottlenecks.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Historical crowd density analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Predictive modeling for event planning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Economic impact assessment of foot traffic</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="monitoring" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Real-time Monitoring</h3>
                  <p className="text-gray-300">
                    Live surveillance of crowd movements across the city with instant alerts for critical situations.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Live CCTV integration with AI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Automated congestion detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Emergency response coordination</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="planning" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Urban Planning Tools</h3>
                  <p className="text-gray-300">
                    Data-driven insights to improve infrastructure and optimize pedestrian pathways.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Infrastructure improvement recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Simulation tools for urban development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Long-term walkability enhancement planning</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="management" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Crowd Management</h3>
                  <p className="text-gray-300">
                    Tools to actively manage pedestrian flow during regular days and special events.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>LED junction display control system</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Dynamic routing algorithm management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 text-[#EA580C]">•</div>
                      <span>Event-specific crowd dispersion planning</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Button className="bg-[#EA580C] hover:bg-orange-700 text-white">Request Admin Access</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
