
import React from 'react';

const WhySuraj: React.FC = () => {
  return (
    <section className="py-20" id="why-suraj">
      <div className="max-w-4xl mx-auto bg-white p-12 shadow-2xl rounded-sm border-r-8 border-blue-50 relative transform -rotate-1">
        {/* Washi Tape */}
        <div className="absolute -top-4 right-10 w-32 h-10 tape clip-path-tape opacity-80 z-20 transform rotate-12"></div>
        
        <h2 className="text-4xl font-bold text-blue-900 tracking-tighter mb-8 lowercase">the journey</h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm">
           <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic mb-8">
             "My goal is simple: Help students transition from tool operators to thinking engineers. We teach logic, then technology."
           </div>
           
           <p>
             During my time at <strong>Netcore Cloud</strong>, I saw firsthand how critical it is to understand the plumbing of the internet. Whether it was optimizing email deliveries for 500k users or debugging SFTP transfer failures, the answer was never just a command—it was understanding the system.
           </p>
           
           <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                 <h4 className="font-bold uppercase text-[10px] text-gray-400 mb-2">Education</h4>
                 <p className="font-bold">B.E. Computer Science</p>
                 <p className="text-xs">KGiSL Institute of Tech (8.1 CGPA)</p>
              </div>
              <div>
                 <h4 className="font-bold uppercase text-[10px] text-gray-400 mb-2">Impact</h4>
                 <p className="font-bold">150+ Students</p>
                 <p className="text-xs">Direct mentorship & workshops</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhySuraj;
