export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Immigration Solutions for<br />
            <span className="text-blue-200">Global Tech Talent</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Streamline your immigration process with expert guidance from The Expat Team.
            We specialize in helping tech companies and professionals navigate complex visa requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cta"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Started
            </a>
            <a
              href="#process"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-colors border-2 border-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
