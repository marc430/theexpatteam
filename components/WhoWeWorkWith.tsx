export default function WhoWeWorkWith() {
  const clients = [
    {
      category: "Tech Companies",
      description: "From startups to Fortune 500s",
      examples: ["Software companies", "AI/ML firms", "Fintech startups", "SaaS providers"]
    },
    {
      category: "Professionals",
      description: "Individual talent seeking opportunities",
      examples: ["Software engineers", "Data scientists", "Product managers", "Designers"]
    },
    {
      category: "Investors",
      description: "Business owners and entrepreneurs",
      examples: ["Startup founders", "Angel investors", "Business owners", "VC partners"]
    },
    {
      category: "Academic Institutions",
      description: "Universities and research organizations",
      examples: ["Research institutions", "Universities", "Think tanks", "Innovation labs"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Work With
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our services are designed for organizations and individuals navigating the global talent landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {client.category}
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-4">
                {client.description}
              </p>
              <ul className="space-y-2">
                {client.examples.map((example, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">▸</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            <div className="text-2xl font-bold text-gray-400">COMPANY</div>
            <div className="text-2xl font-bold text-gray-400">BRAND</div>
            <div className="text-2xl font-bold text-gray-400">STARTUP</div>
            <div className="text-2xl font-bold text-gray-400">TECH</div>
            <div className="text-2xl font-bold text-gray-400">INNOVATION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
