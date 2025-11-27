export default function WhoWeWorkWith() {
  const audiences = [
    "English-speaking professionals",
    "International graduates & students",
    "Tech, engineering, business, and medical workers",
    "Families settling long-term in Germany",
    "Expats planning a stable future here"
  ];

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Who We Work With
        </h2>

        <p className="text-xl text-gray-700 mb-10 text-center">
          We help:
        </p>

        <ul className="space-y-4 mb-12 max-w-2xl mx-auto">
          {audiences.map((audience, index) => (
            <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <span className="text-blue-600 text-2xl mr-4">→</span>
              <span className="text-lg text-gray-800">{audience}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re new in Germany or already working — we build the foundation
          for your financial life.
        </p>
      </div>
    </section>
  );
}
