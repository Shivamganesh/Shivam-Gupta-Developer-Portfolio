
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Animations from '../components/Animations';
import Gallery from '../components/gallery/Gallery';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EducationSection from '@/components/EducationSection';
import CertificateSection from '@/components/CertificateSection';
import VideoShowcaseSection from './VideoShowcaseSection';
import ShowcaseSection from '@/components/InteractiveProjects';
import BlogSection from '@/components/BlogSection';
// import TechQuote from '@/components/TechQuote';
//import ExperienceHoverSection from './ExperienceHoverSection';
//import ShowcaseSection from '@/components/ShowcaseSection';
//import CertificateSection from '@/components/CertificateSection';

const Index = () => {
  return (
    <div className=" scroll-smooth flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoShowcaseSection />
        <Skills />
        <EducationSection />
    < ShowcaseSection  />
        <Experience />
        <CertificateSection />
        <BlogSection />
        <Animations />
        
        <Gallery />
        <Projects />
        
        <Contact />
        {/* <TechQuote /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
