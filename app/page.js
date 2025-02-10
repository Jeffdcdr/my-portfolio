"use client"

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Cert from './components/Cert';
import Contact from './components/Contact';

function Page() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Cert />
      <Contact />
    </div>
  );
}

export default Page;
