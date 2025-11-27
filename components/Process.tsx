export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Book a Call",
      description: "Tell us your situation and goals."
    },
    {
      number: "2",
      title: "Get a Clear Overview",
      description: "We explain your current options and the German landscape."
    },
    {
      number: "3",
      title: "Build Your Strategy",
      description: "Together we create a personalized financial roadmap."
    },
    {
      number: "4",
      title: "Implement with Confidence",
      description: "We handle all the paperwork and comparisons."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Trusted Process
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white font-bold text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
