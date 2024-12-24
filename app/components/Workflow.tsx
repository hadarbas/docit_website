import { Code, MousePointerClick } from 'lucide-react'

export default function Workflow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Use DocIt Your Way</h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          
          {/* API Integration Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col h-[280px] md:h-[300px]">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">API Integration</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-6">Automate tutorial creation right in your workflow</p>
            <pre className="bg-gray-100 p-3 md:p-4 rounded-md text-xs md:text-sm overflow-x-auto flex-grow">
              <code className="language-javascript whitespace-pre-wrap md:whitespace-pre">
                {`const response = await fetch('https://api.example.com/tutorial', {
  method: 'POST',
  body: JSON.stringify({ 
    videoUrl: 'https://example.com/video.mp4' 
  })
});
const tutorial = await response.json();`}
              </code>
            </pre>
          </div>

          {/* Web Interface Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col h-[280px] md:h-[300px]">
            <div className="flex items-center mb-4">
              <MousePointerClick className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">Web Interface</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-6">Share, transform, done. No coding needed</p>
            <div className="bg-gray-100 p-4 rounded-md flex-grow flex items-center justify-center">
              <svg
                viewBox="0 0 300 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[400px]"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Title - Higher position */}
                <text x="150" y="25" fill="#111827" fontSize="16" fontWeight="600" textAnchor="middle">
                  Create a Tutorial
                </text>

                {/* Upload Area - Smaller */}
                <rect x="30" y="35" width="140" height="55" rx="4" fill="transparent" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                {/* Upload Icon and Text - Adjusted */}
                <g transform="translate(100, 50)">
                  <path d="M-10 10 L0 0 L10 10 M0 0 L0 20" stroke="#6B7280" strokeWidth="2" />
                  <text y="35" fill="#6B7280" fontSize="13" textAnchor="middle">
                    Upload video
                  </text>
                </g>

                {/* Create Button - Single line text centered */}
                <g transform="translate(190, 35)">
                  <rect width="80" height="55" rx="4" fill="#2979FF" />
                  <text x="40" y="33" fill="white" fontSize="13" textAnchor="middle" fontWeight="500">
                    Create Tutorial
                  </text>
                </g>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
