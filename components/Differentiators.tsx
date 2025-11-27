export default function Differentiators() {
  const features = [
    {
      number: "1",
      title: "Clear, simple explanations",
      description: "We translate German bureaucracy into practical English."
    },
    {
      number: "2",
      title: "Education-first approach",
      description: "You understand everything before making decisions."
    },
    {
      number: "3",
      title: "Tailored for expats",
      description: "We know the challenges international professionals face — and what actually works."
    },
    {
      number: "4",
      title: "Fully licensed consultants",
      description: "Backed by the HORBACH / Deutsche Bank Group network."
    },
    {
      number: "5",
      title: "No hidden costs",
      description: "Your consultation is free. You only choose policies if they make sense for you."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          What Makes Us Different
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <span className="bg-blue-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  {feature.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
