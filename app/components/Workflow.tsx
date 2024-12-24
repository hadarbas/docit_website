import { Code, MousePointerClick } from 'lucide-react'

export default function Workflow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Use DocIt Your Way</h2>
        
        {/* Changed to flex-col on mobile, row on larger screens */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          
          {/* API Integration Card */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">API Integration</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-4">Automate tutorial creation right in your workflow</p>
            {/* Added responsive padding and text size */}
            <pre className="bg-gray-100 p-3 md:p-4 rounded-md text-xs md:text-sm overflow-x-auto">
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
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MousePointerClick className="w-6 h-6 md:w-8 md:h-8 text-[#2979FF] mr-2" />
              <h3 className="text-lg md:text-xl font-semibold text-[#2979FF]">Web Interface</h3>
            </div>
            <p className="text-sm md:text-base text-gray-600 mb-4">Share, transform, done. No coding needed</p>
            {/* Added min-height and better responsive scaling */}
            <div className="bg-gray-100 p-4 rounded-md w-full aspect-[3/2] md:aspect-auto md:h-[136px] flex items-center justify-center">
              <svg
                viewBox="0 0 300 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full max-h-[100px] md:max-h-[80px]"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Title */}
                <text x="150" y="20" fill="#111827" fontSize="16" fontWeight="600" textAnchor="middle">
                  Create a Tutorial
                </text>

                {/* Upload Area */}
                <rect x="10" y="30" width="180" height="60" rx="4" fill="transparent" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                {/* Upload Icon and Text */}
                <g transform="translate(100, 45)">
                  <path d="M-10 10 L0 0 L10 10 M0 0 L0 20" stroke="#6B7280" strokeWidth="2" />
                  <text y="35" fill="#6B7280" fontSize="12" textAnchor="middle">
                    Upload video
                  </text>
                </g>

                {/* Create Button */}
                <rect x="210" y="30" width="80" height="60" rx="4" fill="#2979FF" />
                <text x="250" y="65" fill="white" fontSize="12" textAnchor="middle" fontWeight="500">
                  Create
                </text>
                <text x="250" y="80" fill="white" fontSize="12" textAnchor="middle" fontWeight="500">
                  Tutorial
                </text>
              </svg>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
