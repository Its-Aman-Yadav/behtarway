import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 bg-[#EA580C]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to walk the Behtar Way?</h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Sign up now and be the first to experience smarter movement in Varanasi.
        </p>

        <Button className="bg-white text-[#EA580C] hover:bg-gray-100 text-lg px-8 py-6">
          Sign Up
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
