export default function Solution() {
  const solutions = [
    {
      title: "Expert Guidance",
      description: "Our team of immigration specialists stays current with all regulatory changes and requirements.",
      icon: "🎓"
    },
    {
      title: "Streamlined Process",
      description: "We handle all paperwork and communications, so you can focus on what matters most.",
      icon: "⚡"
    },
    {
      title: "High Success Rate",
      description: "Our meticulous attention to detail ensures your applications are complete and accurate.",
      icon: "✓"
    },
    {
      title: "Full Transparency",
      description: "Track your case status in real-time with our dedicated client portal and regular updates.",
      icon: "👁️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Immigration Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Expat Team provides end-to-end immigration services designed for the modern workforce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full text-4xl mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Immigration Services
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              From visa applications to permanent residency, we support your entire immigration journey
              with personalized strategies tailored to your unique situation.
            </p>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Work permits and employment visas
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Business and investor visas
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Family reunification programs
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                Citizenship and permanent residency applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
