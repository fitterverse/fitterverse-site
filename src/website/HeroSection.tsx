import React from 'react';

const HeroSection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Lead form not found");
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 text-center leading-tight">
        Take Control of Your Health – Naturally & Sustainably
      </h1>
      <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
        Personalized plans to reverse lifestyle disorders with balanced diet, daily habits, and essential nutrients.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={scrollToForm}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Your Free Health Assessment
        </button>

        <a
          href="https://wa.me/919112549823"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
        >
          Talk to Our Health Coach
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
