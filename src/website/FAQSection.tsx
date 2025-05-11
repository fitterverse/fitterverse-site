// src/website/FAQSection.tsx
import React from 'react';

const faqs = [
  {
    question: 'Is this safe for people with diabetes?',
    answer:
      'Yes. All plans are reviewed by medical professionals and designed to safely support people with Type 1 or Type 2 diabetes.'
  },
  {
    question: 'Do I have to take medicines?',
    answer:
      'No. Our approach is natural and focuses on food, lifestyle and essential nutrients — no pharma unless advised.'
  },
  {
    question: 'Are your supplements certified?',
    answer:
      'Absolutely. We only recommend government-approved products (FSSAI or AYUSH certified).'
  },
  {
    question: 'How long before I see results?',
    answer:
      'Many people feel better in 2–4 weeks. For full reversal, we suggest a 90-day commitment with weekly tracking.'
  },
  {
    question: 'Can I consult with a doctor?',
    answer:
      'Yes. You’ll have access to MDs, Ayurveda consultants and certified coaches depending on your plan.'
  },
  {
    question: 'Can I join if I’m already on medication?',
    answer:
      'Yes! In fact, our goal is to gradually help you reduce dependency (under supervision). Click below to get a custom plan.',
    linkType: 'scroll'
  },
  {
    question: 'What kind of conditions can this help reverse?',
    answer:
      'We’ve helped people with PCOS, Type 2 Diabetes, Thyroid, Obesity, Cholesterol, and more using food + lifestyle changes.'
  },
  {
    question: 'I still have questions. Can I talk to someone?',
    answer:
      'Absolutely! Tap below to WhatsApp our health coach now.',
    linkType: 'whatsapp'
  }
];

const FAQSection = () => {
  const handleAction = (type: string) => {
    if (type === 'scroll') {
      const form = document.getElementById('lead-form');
      if (form) form.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'whatsapp') {
      window.open('https://wa.me/919112549823', '_blank');
    }
  };

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
            {faq.linkType && (
              <button
                onClick={() => handleAction(faq.linkType)}
                className="mt-3 text-blue-600 underline text-sm hover:text-blue-800"
              >
                {faq.linkType === 'scroll' ? 'Get Your Plan' : 'Chat on WhatsApp'}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
