// src/website/TransformationsSection.tsx
import React from 'react';

const transformations = [
  {
    name: 'Anjali',
    issue: 'PCOS',
    result: 'Regular periods in 45 days',
    imageBefore: 'https://via.placeholder.com/150?text=Before',
    imageAfter: 'https://via.placeholder.com/150?text=After',
  },
  {
    name: 'Rahul',
    issue: 'Diabetes',
    result: 'Fasting sugar dropped from 160 → 95',
    imageBefore: 'https://via.placeholder.com/150?text=Before',
    imageAfter: 'https://via.placeholder.com/150?text=After',
  },
  {
    name: 'Meera',
    issue: 'Obesity',
    result: 'Lost 12kg in 3 months',
    imageBefore: 'https://via.placeholder.com/150?text=Before',
    imageAfter: 'https://via.placeholder.com/150?text=After',
  },
];

const TransformationsSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Client Transformations
        </h2>
        <p className="mt-4 text-gray-600">
          Real stories of real people — reversed naturally.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {transformations.map((client, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 text-center">
            <div className="flex justify-center gap-2 mb-4">
              <img src={client.imageBefore} alt="Before" className="rounded-md w-1/2" />
              <img src={client.imageAfter} alt="After" className="rounded-md w-1/2" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">{client.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{client.issue}</p>
            <p className="mt-1 text-sm text-gray-600">{client.result}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Your Journey Can Start Today
        </button>
      </div>
    </section>
  );
};

export default TransformationsSection;
