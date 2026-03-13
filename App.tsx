
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Diagnostic from './components/Diagnostic';
import Solution from './components/Solution';
import WhySuraj from './components/WhySuraj';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative pb-20">
      {/* Repeating Banner Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-5">
         <div className="absolute top-[20%] left-[-5%] rotate-[-12deg] bg-blue-600 text-white py-2 px-10 text-2xl font-bold whitespace-nowrap">
            SYSTEMS THINKING • DEVOPS • SYSTEMS THINKING • DEVOPS
         </div>
         <div className="absolute bottom-[20%] right-[-5%] rotate-[12deg] bg-amber-500 text-white py-2 px-10 text-2xl font-bold whitespace-nowrap">
            ENGINEERING EXCELLENCE • INTERVIEW READY • ENGINEERING EXCELLENCE
         </div>
      </div>

      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-32 space-y-24">
        <Hero />
        <Problem />
        <Diagnostic />
        <Solution />
        <WhySuraj />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
