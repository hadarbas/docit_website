'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Code } from 'lucide-react'

export function EmailForm({ buttonText, variant = 'default', icon = null }: { buttonText: string, variant?: 'default' | 'outline', icon?: React.ReactNode }) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Email submitted:', email)
    setIsSubmitted(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant={variant} className={variant === 'outline' ? "text-[#2979FF] border-[#2979FF] hover:bg-[#90CAF9] hover:text-white" : "bg-[#2979FF] hover:bg-[#1976D2] text-white"}>
          {icon}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{buttonText}</DialogTitle>
        </DialogHeader>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="col-span-4"
                required
              />
            </div>
            <Button type="submit" className="bg-[#2979FF] hover:bg-[#1976D2] text-white">
              Submit
            </Button>
          </form>
        ) : (
          <p className="py-4 text-center text-green-600">Thank you for your interest! We'll be in touch soon.</p>
        )}
      </DialogContent>
    </Dialog>
  )
}

