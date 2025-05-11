// src/website/OurApproachSection.tsx
import React from 'react';
import { FaSearch, FaUtensils, FaRunning, FaCapsules, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: 'Understand Your Current Health',
    description: 'We begin with a deep dive into your symptoms, habits, and lab reports.'
  },
  {
    icon: <FaUtensils />,
    title: 'Personalized Diet Planning',
    description: 'We craft a meal plan that matches your body, taste, and condition.'
  },
  {
    icon: <FaRunning />,
    title: 'Habit Tracking & Coaching',
    description: 'We help you build sustainable habits with 1-on-1 guidance.'
  },
  {
    icon: <FaCapsules />,
    title: 'Supplement Integration',
    description: 'We use essential nutrients and herbs — only when required.'
  },
  {
    icon: <FaChartLine />,
    title: 'Progress Review & Adjustments',
    description: 'We keep improving your plan based on results and feedback.'
  }
];

const OurApproachSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Approach: Diet + Habits + Nutrients
        </h2>
        <p className="mt-4 text-gray-600">
          A step-by-step system designed to reverse lifestyle disorders — naturally.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-5 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-4">
            <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Get Your Personalized Plan Now
        </button>
      </div>
    </section>
  );
};

export default OurApproachSection;
