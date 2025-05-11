// src/website/TestimonialsSection.tsx
import React from 'react';

const testimonials = [
  {
    name: 'Shruti Sharma',
    feedback: 'I reversed my insulin resistance and feel more energetic every day. The team truly cares!',
    source: 'Google Review'
  },
  {
    name: 'Nikhil B.',
    feedback: 'Their PCOS approach was holistic, not just about diet. My cycles are now regular. Thank you!',
    source: 'Instagram'
  },
  {
    name: 'Jasleen Kaur',
    feedback: 'Lost 9kg, improved gut health, and better sleep. Love the WhatsApp updates & tracking!',
    source: 'WhatsApp Screenshot'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Community Love 💬
        </h2>
        <p className="mt-4 text-gray-600">
          Hear from our 5,000+ happy members — across Instagram, WhatsApp, and Google.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="border rounded-xl p-6 shadow text-center bg-gray-50">
            <p className="text-gray-700 italic">“{t.feedback}”</p>
            <div className="mt-4 font-semibold text-blue-700">— {t.name}</div>
            <p className="text-xs text-gray-500">{t.source}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Join Our 5000+ Happy Members
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
