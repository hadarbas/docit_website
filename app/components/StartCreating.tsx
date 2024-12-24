import { EmailCaptureForm } from './EmailCaptureForm'

export default function StartCreating() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Give Your Users the Guides They Deserve</h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-600">Help them succeed with crystal-clear tutorials</p>
           <EmailCaptureForm />
        </div>
      </div>
    </section>
  )
}
