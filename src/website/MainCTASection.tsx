// src/website/MainCTASection.tsx
import React from 'react';

const MainCTASection = () => {
  return (
    <section className="bg-blue-700 py-20 px-6 md:px-16 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Your health transformation starts with a single step.
      </h2>
      <p className="mt-4 text-lg max-w-xl mx-auto">
        Choose your path to healing — and take action today.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Free Consultation
        </button>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Start 7-Day Trial Plan
        </button>
      </div>

      <p className="mt-6 text-sm italic text-blue-100">*Limited spots available each week</p>
    </section>
  );
};

export default MainCTASection;
