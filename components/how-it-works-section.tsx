export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#EA580C] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
                <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
                <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
                <line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
                <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">🛰️ Satellite Mapping</h3>
            <p className="text-gray-300">Every gully, mapped from space</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#EA580C] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6h20" />
                <path d="M2 12h20" />
                <path d="M2 18h20" />
                <path d="M4 3v18" />
                <path d="M10 3v18" />
                <path d="M16 3v18" />
                <path d="M22 3v18" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">📹 CCTV Insights</h3>
            <p className="text-gray-300">Crowd levels scored live</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-[#EA580C] flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3">📱 App + LED Screens</h3>
            <p className="text-gray-300">Smart guidance for everyone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
