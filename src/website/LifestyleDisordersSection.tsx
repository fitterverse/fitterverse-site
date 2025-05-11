// src/website/LifestyleDisordersSection.tsx
import React from 'react';
import { FaHeartbeat, FaTint, FaBalanceScale, FaAppleAlt, FaBrain, FaBed, FaWeight, FaBurn } from 'react-icons/fa';

const disorders = [
  { icon: <FaTint />, label: 'Diabetes', desc: 'Lower blood sugar naturally with food & habits.' },
  { icon: <FaAppleAlt />, label: 'PCOS/PCOD', desc: 'Manage hormonal imbalances and symptoms.' },
  { icon: <FaWeight />, label: 'Obesity', desc: 'Sustainable weight loss plans that work.' },
  { icon: <FaBalanceScale />, label: 'Thyroid', desc: 'Support healthy thyroid function daily.' },
  { icon: <FaHeartbeat />, label: 'High BP', desc: 'Reduce blood pressure safely & naturally.' },
  { icon: <FaBurn />, label: 'High Cholesterol', desc: 'Lower cholesterol without medication.' },
  { icon: <FaBrain />, label: 'Stress', desc: 'Lifestyle support for stress and burnout.' },
  { icon: <FaBed />, label: 'Sleep Issues', desc: 'Improve sleep with non-drug interventions.' },
];

const LifestyleDisordersSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Lifestyle Disorders We Help With
        </h2>
        <p className="mt-4 text-gray-600">
          We create condition-specific, root-cause reversal programs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {disorders.map((item, index) => (
          <div
            key={index}
            className="group p-4 rounded-xl shadow hover:shadow-lg border text-center cursor-pointer transition duration-200 hover:bg-blue-50"
          >
            <div className="text-4xl text-blue-600 mb-2 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
            <p className="text-sm text-gray-600 mt-1 hidden group-hover:block">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          See How We Manage Each Condition
        </button>
      </div>
    </section>
  );
};

export default LifestyleDisordersSection;
