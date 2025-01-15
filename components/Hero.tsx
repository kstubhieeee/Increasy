export default function Hero() {
  return (
    <div className="text-center mt-24 mb-16 relative px-4">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
        #1 Productivity Software
      </div>
      <h1 className="text-7xl font-bold mb-8 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">Supercharge Your Team's</span>
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">Productivity</span>
      </h1>
      <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Increasy helps you work smarter, collaborate seamlessly, and stay ahead. Say goodbye to busy work and focus on what truly matters.
      </p>
      <button className="neon-button bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-12 py-4 rounded-full text-xl font-semibold mb-4 transition-all duration-300 hover:from-yellow-300 hover:to-yellow-400">
        <span>⚡ Try 14 days free</span>
      </button>
      <p className="text-sm text-gray-500 mt-2">No credit card required</p>
      <div className="flex justify-center items-center space-x-2 mt-12">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-gray-400">1k+ rating on Product Hunt</span>
      </div>
    </div>
  )
}

