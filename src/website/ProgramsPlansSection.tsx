// src/website/ProgramsPlansSection.tsx
import React from 'react';

const plans = [
  {
    name: 'Basic Starter',
    features: ['Free Health Assessment', 'Introductory Diet Plan'],
    price: 'Free',
    badge: 'Popular',
  },
  {
    name: '30-Day Kickstart',
    features: ['Personal Coach', 'Weekly Plan Adjustments', 'Progress Tracking'],
    price: '₹1,999',
    badge: 'Recommended',
  },
  {
    name: '90-Day Reversal',
    features: ['Advanced Lab Integration', '1-on-1 Video Consults', 'Supplement Plan'],
    price: '₹4,999',
    badge: 'Best Results',
  },
];

const ProgramsPlansSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Programs & Plans
        </h2>
        <p className="mt-4 text-gray-600">
          Choose what fits you — whether you're starting out or going all in.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-xl p-6 shadow hover:shadow-lg transition">
            {plan.badge && (
              <span className="inline-block mb-2 text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-6 text-2xl font-bold text-blue-700">{plan.price}</div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              {plan.price === 'Free' ? 'Start Free' : 'Join Now'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="text-blue-600 underline hover:text-blue-800 font-medium">
          Talk to an Expert
        </button>
      </div>
    </section>
  );
};

export default ProgramsPlansSection;

