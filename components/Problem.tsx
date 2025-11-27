export default function Problem() {
  const problems = [
    "Complex insurance rules",
    "Unclear retirement options",
    "Confusing contracts",
    "No one to explain things properly in English"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Why This Matters
        </h2>

        <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
          Moving to Germany is exciting — but the financial system can feel overwhelming:
        </p>

        <ul className="space-y-4 mb-8">
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-500 text-2xl mr-4">•</span>
              <span className="text-lg text-gray-700">{problem}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Most expats end up paying too much, missing key protections, or planning too late.
        </p>

        <p className="text-xl font-semibold text-gray-900 text-center">
          You don&apos;t need to figure this out alone.
        </p>
      </div>
    </section>
  );
}
