// src/website/FAQSection.tsx
import React from 'react';

const faqs = [
  {
    question: 'Is this safe for people with diabetes?',
    answer: 'Yes. All plans are reviewed by medical professionals and designed for diabetic safety.'
  },
  {
    question: 'Do I have to take medicines?',
    answer: 'No, our focus is on non-pharma approaches using food, habits, and essential nutrients.'
  },
  {
    question: 'Are your supplements certified?',
    answer: 'Absolutely. We only recommend FSSAI- or AYUSH-approved products.'
  },
  {
    question: 'How long before I see results?',
    answer: 'Most users notice improvements in 2–4 weeks. Full reversal takes 90+ days depending on condition.'
  },
  {
    question: 'Can I consult with a doctor?',
    answer: 'Yes, we have MDs and Ayurvedic consultants available as part of your plan.'
  }
];

const FAQSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600">
          Clear your doubts before you start your transformation.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow">
            <h3 className="font-semibold text-gray-800 text-lg">Q. {faq.question}</h3>
            <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

