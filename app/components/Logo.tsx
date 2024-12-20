export default function Logo({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 150" className={className}>
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1976D2", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#90CAF9", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Logo Icon */}
      <path d="M20,20 L60,60 L20,100 L20,20 Z M80,40 L180,40 M80,60 L160,60 M80,80 L140,80" fill="none" stroke="url(#blueGradient)" strokeWidth="12" strokeLinejoin="round" strokeLinecap="round" />
      
      {/* Company Name */}
      <text x="120" y="140" fontFamily="Open Sans, sans-serif" fontSize="24" fontWeight="700" fill="#000000" textAnchor="middle">DocIt</text>
    </svg>
  )
}

