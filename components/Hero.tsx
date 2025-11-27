export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            THE EXPAT TEAM
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Finance & Insurance for International Professionals in Germany
          </p>
          <p className="text-lg text-gray-600">
            Clarity. Structure. Peace of Mind.
          </p>
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build your life in Germany with confidence.
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We help international professionals understand German finance, insurance,
            and retirement planning — clearly, transparently, and in your language.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
            Book Your Free Consultation
          </button>
        </div>

        {/* Languages */}
        <p className="text-gray-600 text-sm">
          English • Spanish • German
        </p>
      </div>
    </section>
  );
}
