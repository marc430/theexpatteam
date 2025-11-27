export default function Problem() {
  const problems = [
    {
      title: "Complex Regulations",
      description: "Immigration laws are constantly changing and vary by country, making it difficult to stay compliant."
    },
    {
      title: "Time-Consuming Process",
      description: "Endless paperwork and bureaucratic procedures drain valuable time from your business operations."
    },
    {
      title: "High Rejection Rates",
      description: "Minor mistakes in applications can lead to costly rejections and delays in hiring top talent."
    },
    {
      title: "Lack of Transparency",
      description: "Traditional immigration services often lack clear communication, leaving you in the dark about your case status."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            The Immigration Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Companies and professionals face mounting obstacles when dealing with international talent mobility
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white text-2xl font-bold">
                    !
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
