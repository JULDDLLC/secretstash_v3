'use client';

import React from 'react';

export const FloatingParticles: React.FC = () => {
  return (
    <div className="floating-particles" style={{ pointerEvents: 'none' }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
};