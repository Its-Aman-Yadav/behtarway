import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="relative h-16 w-16 mb-4">
            <Image
              src="/images/behtar-way-logo.png"
              alt="Behtar-Way Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <p className="text-gray-400 text-center">A product of VOGIC AI | Intpixel Labs Private Limited</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}
