import { Button } from '@/components/ui/button'
import { Code } from 'lucide-react'
import { EmailForm } from './EmailForm'

export default function StartCreating() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Give Your Users the Guides They Deserve</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-600">Help them succeed with crystal-clear tutorials</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <EmailForm buttonText="Request API Access" variant="outline" icon={<Code className="mr-2 h-4 w-4" />} />
            <EmailForm buttonText="Join Early Access" />
          </div>
        </div>
      </div>
    </section>
  )
}

