'use client';

import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'HTML / CSS / JavaScript', logo: '/assets/html-logo.png' },
    { name: 'Java', logo: '/assets/java-logo.png' },
    { name: 'Development QA', logo: '/assets/qa-logo.png' },
    { name: 'SQL', logo: '/assets/sql-logo.png' },
    { name: 'Sitecore', logo: '/assets/sitecore-logo.png' },
  ];

  return (
    <section>
      <h2>Technical Skills</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ textAlign: 'center', width: '100px' }}>
            <img
              src={skill.logo}
              alt={skill.name}
              width={60}
              height={60}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60?text=Logo';
              }}
            />
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
