export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your immigration needs and eligibility. Our experts will discuss your goals and recommend the best strategy."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on your unique situation, we create a customized immigration roadmap with clear timelines, requirements, and next steps."
    },
    {
      number: "03",
      title: "Document Preparation",
      description: "Our team handles all paperwork, ensuring accuracy and completeness. We guide you through gathering required documents and evidence."
    },
    {
      number: "04",
      title: "Application Submission",
      description: "We submit your application with meticulous attention to detail, maximizing your chances of approval on the first attempt."
    },
    {
      number: "05",
      title: "Case Management",
      description: "Track your case progress in real-time through our client portal. We handle all communications with immigration authorities on your behalf."
    },
    {
      number: "06",
      title: "Success & Support",
      description: "Once approved, we continue supporting you through arrival, settlement, and any future immigration needs you may have."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A straightforward, transparent approach to your immigration journey
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-grow bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your immigration journey?
          </p>
          <a
            href="#cta"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
