export default function Differentiators() {
  const differentiators = [
    {
      title: "Tech Industry Specialists",
      description: "We understand the unique needs of tech companies and startups, from H-1B visas to O-1 exceptional ability cases.",
      stat: "500+",
      statLabel: "Tech Companies Served"
    },
    {
      title: "Global Reach",
      description: "Our network spans 50+ countries, enabling us to support international talent mobility anywhere in the world.",
      stat: "50+",
      statLabel: "Countries Covered"
    },
    {
      title: "Proven Track Record",
      description: "With a 98% success rate, we've helped thousands of professionals achieve their immigration goals.",
      stat: "98%",
      statLabel: "Success Rate"
    },
    {
      title: "White-Glove Service",
      description: "Each client receives personalized attention from a dedicated immigration specialist throughout the entire process.",
      stat: "24/7",
      statLabel: "Support Available"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose The Expat Team?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another immigration firm—we're your strategic partner in global talent mobility
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  {diff.stat}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  {diff.statLabel}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">
                {diff.title}
              </h3>
              <p className="text-gray-300 text-center">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
