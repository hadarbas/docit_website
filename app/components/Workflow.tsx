import { Code, MousePointerClick, Upload } from 'lucide-react'

export default function Workflow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Use DocIt Your Way</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-[#2979FF] mr-2" />
              <h3 className="text-xl font-semibold text-[#2979FF]">API Integration</h3>
            </div>
            <p className="text-gray-600 mb-4">Automate tutorial creation right in your workflow</p>
            <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto h-[136px]">
              <code className="language-javascript">
                {`const response = await fetch('https://api.example.com/tutorial', {
  method: 'POST',
  body: JSON.stringify({ videoUrl: 'https://example.com/video.mp4' })
});
const tutorial = await response.json();`}
              </code>
            </pre>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
            <div className="flex items-center mb-4">
              <MousePointerClick className="w-8 h-8 text-[#2979FF] mr-2" />
              <h3 className="text-xl font-semibold text-[#2979FF]">Web Interface</h3>
            </div>
            <p className="text-gray-600 mb-4">Share, transform, done. No coding needed</p>
            <div className="bg-gray-100 p-4 rounded-md flex items-center justify-center flex-col">
              <svg
                viewBox="0 0 300 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[300px] h-full"
              >
                {/* Title - Centered */}
                <text x="150" y="20" fill="#111827" fontSize="16" fontWeight="600" textAnchor="middle">
                  Create a Tutorial
                </text>

                {/* Upload Area */}
                <rect x="10" y="30" width="180" height="60" rx="4" fill="transparent" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                {/* Centered Upload Icon and Text */}
                <g transform="translate(100, 45)">
                  <Upload width="20" height="20" stroke="#6B7280" x="-10" y="0" />
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
