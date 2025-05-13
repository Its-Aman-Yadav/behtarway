export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 bg-background-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Real Outcomes</h2>

        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Behtar-Way is already making Varanasi walkable again.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative aspect-square">
              <img
                src="/placeholder.svg?key=e52by"
                alt="Family walking peacefully"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="p-4 text-white font-medium">Families enjoy peaceful walks</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative aspect-square">
              <img
                src="/placeholder.svg?key=ml7dk"
                alt="Shopkeeper smiling at new footfall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="p-4 text-white font-medium">Local businesses thrive with new visitors</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative aspect-square">
              <img
                src="/placeholder.svg?key=ta3tm"
                alt="LED screen at a busy junction"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="p-4 text-white font-medium">Smart LED screens guide pilgrims</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative aspect-square">
              <img
                src="/placeholder.svg?key=rtsiy"
                alt="Control room heatmap interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="p-4 text-white font-medium">Real-time crowd management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
