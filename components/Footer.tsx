
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 mt-20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-400 uppercase tracking-widest gap-4">
         <p>© 2026 SURAJ KARTHIC • SYSTEMS THINKING</p>
         <div className="flex gap-8">
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">Email</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
