
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 pt-0 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-end">
        <div className="pointer-events-auto bg-[#0056b3] text-white px-10 py-4 shadow-2xl flex items-center gap-12 rounded-b-sm border-b-2 border-black/10">
          <a href="#" className="text-3xl font-bold tracking-tighter lowercase">about me</a>
          <div className="hidden md:flex gap-8 text-[13px] font-black uppercase tracking-[0.15em]">
            <a href="#why-suraj" className="hover:text-amber-300 transition-colors">SURAJ</a>
            <a href="#solution" className="hover:text-amber-300 transition-colors">LECTURE</a>
            <a href="#pricing" className="hover:text-amber-300 transition-colors">PRICING</a>
            <a href="#contact" className="hover:text-amber-300 transition-colors">BOOK</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
