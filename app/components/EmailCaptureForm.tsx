'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch('/.netlify/functions/submit-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, source: "Email Capture Form"})
            });
             if (!response.ok) {
                const error = await response.json();
                console.error("Error sending email: ", error);
                alert("Error sending email, try again later");
                 return;
             }
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error sending email: ", error);
            alert("Error sending email, try again later");
        }
    }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-2 p-1 rounded-full bg-white border border-gray-200 shadow-sm">
          {!isSubmitted ? (
            <>
              <div className="flex items-center pl-4">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 py-2 bg-transparent border-0 outline-none text-gray-900 placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#2979FF] hover:bg-[#1976D2] text-white rounded-full transition-colors"
              >
                Early Access
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center w-full gap-2 py-2 text-[#2979FF]">
              <Check className="h-5 w-5" />
              <span>Great! We will send you the API key shortly</span>
            </div>
          )}
        </div>
      </form>
      {!isSubmitted && (
        <p className="text-sm text-center mt-2 text-gray-600">Get your API token today</p>
      )}
    </div>
  )
}
