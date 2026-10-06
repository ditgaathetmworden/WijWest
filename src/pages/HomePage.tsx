import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ValuesBar } from '../components/home/ValuesBar';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ValuesBar />
    </div>
  );
};
