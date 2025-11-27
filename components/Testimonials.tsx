export default function Testimonials() {
  const testimonials = [
    "Finally someone who explains German insurance in a normal way.",
    "I understood more in 30 minutes than in 2 years here.",
    "We actually feel safe planning our family's future now."
  ];

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">&ldquo;</div>
              <p className="text-gray-700 text-lg italic mb-4">
                {testimonial}
              </p>
              <div className="text-blue-600 text-4xl text-right">&rdquo;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
