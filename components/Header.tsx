import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-8 bg-black border-b border-gray-800">
      <div className="flex items-center">
        <svg className="w-8 h-8 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-2xl font-bold text-white">Increasy</span>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Benefits</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">How-it-Works</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</Link></li>
          <li><Link href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</Link></li>
        </ul>
      </nav>
      <button className="neon-button bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300">
        <span>Take the first step</span>
      </button>
    </header>
  )
}

