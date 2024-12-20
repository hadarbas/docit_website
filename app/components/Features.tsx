import { Code2, MessageSquare, Search, Image } from 'lucide-react'

export default function Features() {
  const features = [
    { name: "API-First Design", description: "Fits right into your development workflow", icon: Code2 },
    { name: "Matches Your Voice", description: "Speaks your brand's language perfectly", icon: MessageSquare },
    { name: "SEO-Ready Content", description: "Rank better with optimized tutorials", icon: Search },
    { name: "Smart Visuals", description: "Perfect screenshots, right where they matter", icon: Image }
  ]

  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Features You'll Love</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="border-2 border-[#2979FF] p-4 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-[#2979FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

