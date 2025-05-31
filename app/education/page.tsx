'use client';

import React from 'react';

export default function EducationSection() {
  const education = [
    {
      school: 'University of Southern California',
      program: 'Bachelor of Science, Music Industry, Minor in Business Administration',
      description:
        'This program combined creative and commercial aspects of the music industry with foundational business skills.',
      logo: '/assets/usc-logo.png',
    },
    {
      school: 'California Institute of Technology',
      program: 'Web Development Coding Bootcamp',
      description:
        'This intensive bootcamp focused on full-stack web development, algorithms, and real-world projects.',
      logo: '/assets/caltech-logo.png',
    },
    {
      school: 'Coursera',
      program: 'Google Data Analytics Bootcamp',
      description:
        'This program provided a comprehensive foundation in data cleaning, analysis, and visualization using tools like SQL and Tableau.',
      logo: '/assets/coursera-logo.png',
    },
  ];

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2 border-black">Education</h1>
      {education.map((item, idx) => (
        <div key={idx} className="mb-8 border-l-4 border-black pl-4">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={item.logo}
              alt={item.school}
              width={40}
              height={40}
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=Logo';
              }}
            />
            <div>
              <h2 className="text-xl font-semibold">{item.school}</h2>
              <h3 className="text-md italic">{item.program}</h3>
            </div>
          </div>
          <p className="text-gray-200">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
