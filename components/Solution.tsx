export default function Solution() {
  const services = [
    "Retirement Planning (Altersvorsorge)",
    "Disability Insurance (Berufsunfähigkeit)",
    "Health & Liability Insurance (Private & Public)",
    "Investment Strategies",
    "Family Protection & Risk Coverage"
  ];

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          How We Help
        </h2>

        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto">
          <span className="font-bold text-gray-900">The Expat Team</span> guides you step-by-step
          through the German system with clarity and real expertise.
        </p>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            We support you with:
          </h3>

          <ul className="space-y-4 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <span className="text-blue-600 text-2xl mr-4">✓</span>
                <span className="text-lg text-gray-800 font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-2">
          <p className="text-lg text-gray-700">Always independent. Always educational.</p>
          <p className="text-xl font-semibold text-gray-900">Zero sales pressure.</p>
        </div>
      </div>
    </section>
  );
}
