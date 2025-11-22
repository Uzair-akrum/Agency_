import React from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Clients } from '../components/Clients';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Clients />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};