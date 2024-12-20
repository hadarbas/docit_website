import { Upload, Wand2, Share2, ArrowRight, Code2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      title: "Share Your Video",
      description: "Upload directly, paste a link, or send through our API - we handle any product walkthrough",
      icon: Upload
    },
    {
      title: "Watch the Magic",
      description: "Your video transforms into a clear, structured tutorial that reads naturally",
      icon: Wand2
    },
    {
      title: "Help Your Users",
      description: "Export to any format and share everywhere - from knowledge bases to training platforms",
      icon: Share2
    }
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-2 text-center text-black">Transform Any Video into a Perfect Guide</h2>
        <p className="text-xl mb-4 text-center text-gray-700">Save hours of writing time with automated tutorial creation</p>
        <div className="w-16 h-1 bg-gray-200 mx-auto mb-8"></div>
        <h3 className="text-3xl font-semibold mb-20 text-center text-gray-900">Simple, Fast, Flexible</h3>

        {/* Upload Interface */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="relative">
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 flex flex-col items-center justify-center bg-white">
              <div className="bg-[#2979FF] rounded-full p-4 mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload your video</h3>
              <p className="text-gray-500">Get instant documentation</p>
            </div>

            {/* Code Icon */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
              <Code2 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full mb-4">
                <step.icon className="w-10 h-10 text-[#2979FF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{step.title}</h3>
              <p className="text-base text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-gray-200 mt-16"></div>
      </div>
    </section>
  )
}

