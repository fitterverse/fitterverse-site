// src/website/WellnessTeamSection.tsx
import React from 'react';

const teamMembers = [
  {
    name: 'Dr. Neha Verma',
    role: 'Clinical Nutritionist',
    image: 'https://via.placeholder.com/150',
    bio: '10+ years helping women with PCOS & gut health.',
    languages: 'English, Hindi'
  },
  {
    name: 'Coach Arjun Mehta',
    role: 'Lifestyle Coach',
    image: 'https://via.placeholder.com/150',
    bio: 'Habit builder & metabolic health expert.',
    languages: 'Hindi, Punjabi'
  },
  {
    name: 'Dr. Simran Rao',
    role: 'Ayurveda Consultant',
    image: 'https://via.placeholder.com/150',
    bio: 'Integrates Ayurveda with modern science.',
    languages: 'English, Marathi'
  }
];

const WellnessTeamSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Your Wellness Team
        </h2>
        <p className="mt-4 text-gray-600">
          Experts in nutrition, coaching, and Ayurveda — ready to guide you.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-xl shadow-lg p-6 text-center border">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{member.role}</p>
            <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
            <p className="text-sm text-gray-500 mt-1 italic">Languages: {member.languages}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://wa.me/919112549823"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block"
        >
          Book a Free Call With Our Coach
        </a>
      </div>
    </section>
  );
};

export default WellnessTeamSection;
