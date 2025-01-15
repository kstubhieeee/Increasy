import Header from '../components/Header'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Header />
      <Hero />
      <div className="relative py-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-yellow-700 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Testimonial
              name="David K."
              role="Sales Executive"
              content="Since adopting Increasy, I've seen a big boost in my productivity. It keeps me organized and lets me focus."
              rating={5}
            />
            <Testimonial
              name="John P."
              role="Project Manager"
              content="The automation features save me so much time. Increasy is a must-have for any team looking to boost efficiency."
              rating={5}
            />
            <Testimonial
              name="Mike T."
              role="Developer"
              content="Increasy has been a game-changer for our team. We save hours each week and the collaboration features are fantastic."
              rating={5}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

