import { Code, MousePointerClick } from 'lucide-react'

export default function Workflow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Use DocIt Your Way</h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          
          {/* API Integration Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col h-[360px] md:h-[400px]">
            <div className="flex items-center mb-6">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">API Integration</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-8">Automate tutorial creation right in your workflow</p>
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
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col h-[360px] md:h-[400px]">
            <div className="flex items-center mb-6">
              <MousePointerClick className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">Web Interface</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-8">Share, transform, done. No coding needed</p>
            <div className="bg-gray-100 p-4 rounded-md flex-grow flex items-center justify-center">
              <svg
                viewBox="0 0 300 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[400px]"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Title - Moved up */}
                <text x="150" y="30" fill="#111827" fontSize="18" fontWeight="600" textAnchor="middle">
                  Create a Tutorial
                </text>

                {/* Upload Area - Enlarged */}
                <rect x="20" y="45" width="160" height="70" rx="4" fill="transparent" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                {/* Upload Icon and Text - Adjusted position */}
                <g transform="translate(100, 65)">
                  <path d="M-12 12 L0 0 L12 12 M0 0 L0 24" stroke="#6B7280" strokeWidth="2" />
                  <text y="40" fill="#6B7280" fontSize="14" textAnchor="middle">
                    Upload video
                  </text>
                </g>

                {/* Create Button - Enlarged and text centered */}
                <g transform="translate(200, 45)">
                  <rect width="90" height="70" rx="4" fill="#2979FF" />
                  <text x="45" y="42" fill="white" fontSize="14" textAnchor="middle" fontWeight="500">
                    Create
                  </text>
                  <text x="45" y="42" dy="16" fill="white" fontSize="14" textAnchor="middle" fontWeight="500">
                    Tutorial
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
