import React from 'react';
import HeroSection from './HeroSection';
import LifestyleDisordersSection from './LifestyleDisordersSection';
import OurApproachSection from './OurApproachSection';
import ProgramsPlansSection from './ProgramsPlansSection';
import TransformationsSection from './TransformationsSection';
import WellnessTeamSection from './WellnessTeamSection';
import BlogResourcesSection from './BlogResourcesSection';
import TestimonialsSection from './TestimonialsSection';
import MainCTASection from './MainCTASection';
import FAQSection from './FAQSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <LifestyleDisordersSection />
      <OurApproachSection />
      <ProgramsPlansSection />
      <TransformationsSection />
      <WellnessTeamSection />
      <BlogResourcesSection />
      <TestimonialsSection />
      <MainCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default HomePage;