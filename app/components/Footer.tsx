import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="/api-docs" className="text-sm text-gray-600 hover:text-gray-900">
              API Docs
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center space-x-4">
            <Logo className="w-32 h-20" />
            <span className="text-sm text-gray-600">© 2024 DocIt. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
