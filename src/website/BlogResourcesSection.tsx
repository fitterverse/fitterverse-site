// src/website/BlogResourcesSection.tsx
import React from 'react';

const resources = [
  {
    title: 'What is Insulin Resistance?',
    type: 'Article',
    link: '#',
  },
  {
    title: 'PCOS Checklist – Free Download',
    type: 'Tool',
    link: '#',
  },
  {
    title: 'Foods That Trigger PCOD',
    type: 'Article',
    link: '#',
  },
  {
    title: 'Sleep & Weight Gain Connection',
    type: 'Article',
    link: '#',
  }
];

const BlogResourcesSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Free Resources & Blog
        </h2>
        <p className="mt-4 text-gray-600">
          Learn, explore, and reverse lifestyle conditions with expert guides and tools.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block p-5 border bg-white rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-blue-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.type}</p>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Read More Articles
        </button>
      </div>
    </section>
  );
};

export default BlogResourcesSection;
