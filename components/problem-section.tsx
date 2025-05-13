export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-background-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Problem</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
            <img
              src="/placeholder.svg?key=d2x62"
              alt="Google Maps with few paths"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/70 text-white p-3 text-sm">
              Standard Maps: Limited Paths
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
            <img src="/placeholder.svg?key=eg33o" alt="Dense local lane map" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 bg-black/70 text-white p-3 text-sm">
              Reality: Hundreds of Hidden Paths
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-white">
            "Lakhs of pilgrims walk the same narrow streets... because no one shows them the alternatives."
          </p>
        </div>
      </div>
    </section>
  )
}
