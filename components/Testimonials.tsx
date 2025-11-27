export default function Testimonials() {
  const testimonials = [
    {
      quote: "The Expat Team made our H-1B process incredibly smooth. Their expertise and attention to detail gave us confidence throughout the entire journey.",
      author: "Sarah Chen",
      role: "CTO, TechStartup Inc.",
      company: "San Francisco, CA"
    },
    {
      quote: "After being rejected twice by other firms, The Expat Team successfully handled my O-1 visa application. Their knowledge of the tech industry is unmatched.",
      author: "Marcus Rodriguez",
      role: "Senior Software Engineer",
      company: "New York, NY"
    },
    {
      quote: "As a growing startup, we needed a reliable immigration partner. The Expat Team has helped us bring in talent from 15 different countries seamlessly.",
      author: "Jennifer Park",
      role: "VP of People Operations",
      company: "Austin, TX"
    },
    {
      quote: "The transparency and communication throughout our green card process was exceptional. We always knew exactly where we stood and what to expect next.",
      author: "Ahmed Hassan",
      role: "Data Scientist",
      company: "Seattle, WA"
    },
    {
      quote: "Working with The Expat Team was a game-changer for our international expansion. They understand the complexities of global talent mobility like no other.",
      author: "Lisa Thompson",
      role: "CEO, Global Tech Solutions",
      company: "Boston, MA"
    },
    {
      quote: "From start to finish, the process was professional and efficient. The Expat Team's white-glove service is worth every penny.",
      author: "Raj Patel",
      role: "Founder & CEO",
      company: "Los Angeles, CA"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the professionals and companies we've helped
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-blue-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
                <p className="text-sm text-blue-600">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
