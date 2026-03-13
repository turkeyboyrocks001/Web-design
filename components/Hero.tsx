
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Lanyard/ID Card Section */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative group mt-10">
            {/* Lanyard Tab & Eyelet - Matching the visual reference exactly */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30">
               <div className="w-10 h-14 bg-[#0056b3] rounded-sm flex items-center justify-center shadow-md relative border-b-2 border-black/20">
                  {/* Metal eyelet/hole */}
                  <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-gray-400 shadow-inner"></div>
               </div>
            </div>
            
            {/* ID Card Holder */}
            <div className="w-[320px] bg-white rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-t-[12px] border-[#0056b3] relative z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-700 ease-in-out overflow-hidden">
               <div className="text-center py-6">
                  <span className="text-[11px] font-bold tracking-[0.4em] text-[#0056b3] uppercase">SYSTEMS INSTR.</span>
               </div>
               
               {/* Image Container */}
               <div className="px-6 pb-6">
                  <div className="relative aspect-[4/5] bg-gray-50 rounded-sm border border-gray-100 overflow-hidden shadow-inner">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* USER: Replace this src path with your actual uploaded image file path */}
                      <img 
                        src="https://ibb.co/rGGhQGRz" 
                        alt="Suraj K - DevOps Systems Thinking Instructor" 
                        id="headshot"
                        className="object-cover"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
               </div>
               
               {/* Contact Section - Yellow Highlight Box */}
               <div className="bg-[#fff9c4] p-6 border-t border-yellow-200">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Credentials</p>
                    <p className="text-sm font-bold font-mono text-gray-900 tracking-tight">COIMBATORE, TN</p>
                    <p className="text-sm font-bold font-mono text-gray-900 tracking-tight">10/07/2000</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-yellow-300/50 flex justify-between items-end">
                     <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">verified instructor</p>
                     <div className="w-8 h-8 opacity-20">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Notebook Intro Section */}
        <div className="lg:col-span-8 relative">
           {/* Notebook Spiral Decoration */}
           <div className="absolute -left-6 top-16 h-[75%] w-6 flex flex-col justify-between z-10 py-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-gray-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"></div>
              ))}
           </div>

           <div className="bg-white p-16 rounded-r-xl shadow-2xl border-l-[45px] border-[#f8fafc] min-h-[580px] relative overflow-hidden">
              {/* Subtle Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

              <div className="relative z-10">
                <div className="mb-12">
                   <span className="handwritten text-[#2563eb] text-4xl block mb-2">Hello, I'm</span>
                   <h1 className="text-8xl font-black text-[#1e3a8a] tracking-tighter mb-8 leading-none">Suraj K</h1>
                   <div className="flex flex-wrap gap-4 mb-10">
                      <span className="bg-[#2563eb] text-white px-5 py-2 text-xs font-black rounded-sm transform -rotate-2 shadow-md uppercase tracking-widest">Creative</span>
                      <span className="bg-[#f97316] text-white px-5 py-2 text-xs font-black rounded-sm transform rotate-1 shadow-md uppercase tracking-widest">Curious</span>
                      <span className="bg-[#fbbf24] text-black px-5 py-2 text-xs font-black rounded-sm transform -rotate-1 shadow-md uppercase tracking-widest">Meticulous</span>
                   </div>
                </div>

                <div className="space-y-8 text-gray-600 leading-relaxed max-w-2xl text-xl">
                   <p className="font-medium">
                      I was exposed to production systems since early in my career and quickly realized that this is my passion.
                   </p>
                   <p>
                      With <strong>2.8 years of experience</strong> as a Product Support Engineer at Netcore Cloud, I have had the opportunity to participate in many projects, from designing systems thinking modules to resolving complex delivery bottlenecks for enterprise clients.
                   </p>
                   <p className="text-gray-800">
                      I am always constantly learning and updating new trends to improve my skills and create quality educational experiences. I look forward to accompanying your institution, contributing my expertise to create practical and impressive values.
                   </p>
                </div>

                {/* Yellow Sticky Note */}
                <div className="absolute bottom-12 right-12 transform rotate-3 bg-[#fde047] p-10 shadow-2xl max-w-[240px] marker border-b-[6px] border-yellow-500/50">
                   <p className="text-3xl leading-none mb-4">Don't forget to contact me!</p>
                   <div className="flex justify-end">
                      <svg className="w-12 h-12 text-[#1e40af] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                   </div>
                </div>
              </div>
           </div>

           {/* Blue Strip Ribbon Banner */}
           <div className="mt-12 bg-[#1e40af] text-white py-5 px-16 flex justify-between items-center shadow-2xl transform rotate-1 relative z-20 overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}></div>
              <span className="font-black text-sm uppercase tracking-[0.3em] relative z-10">Systems Designer</span>
              <span className="text-3xl text-blue-300/40">★</span>
              <span className="font-black text-sm uppercase tracking-[0.3em] relative z-10">DevOps Educator</span>
              <span className="text-3xl text-blue-300/40">★</span>
              <span className="font-black text-sm uppercase tracking-[0.3em] relative z-10">Guest Lecturer</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
