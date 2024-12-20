'use client'

import { useState } from 'react'
import { Code } from 'lucide-react'

export function EmailForm({ buttonText, variant = 'default', icon = null }: { buttonText: string, variant?: 'default' | 'outline', icon?: React.ReactNode }) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Email submitted:', email)
    setIsSubmitted(true);
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      setIsSubmitted(false);
  };

  return (
    <div className="relative">
       <button
          onClick={handleOpenModal}
          className={`
                ${variant === 'outline' ? "text-[#2979FF] border-[#2979FF] hover:bg-[#90CAF9] hover:text-white" : "bg-[#2979FF] hover:bg-[#1976D2] text-white"}
              text-lg px-4 py-2 rounded-md
            `}>
          {icon}
          {buttonText}
        </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="relative w-[300px] p-6 bg-white border rounded-md shadow-md">
              <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                X
              </button>

              {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="col-span-4 border rounded-md p-2"
                        required
                        />
                    </div>
                    <button type="submit" className="bg-[#2979FF] hover:bg-[#1976D2] text-white rounded-md p-2">
                        Submit
                    </button>
                    </form>
              ) : (
                    <p className="py-4 text-center text-green-600">Thank you for your interest! We'll be in touch soon.</p>
                )}
          </div>
        </div>
      )}
    </div>
  )
}
