
import React from 'react';

const Diagnostic: React.FC = () => {
  return (
    <section className="relative py-10" id="diagnostic">
      {/* Clipboard Background */}
      <div className="max-w-4xl mx-auto bg-[#c2b280] p-4 rounded-xl shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-32 h-16 bg-gray-400 rounded-t-xl flex items-center justify-center shadow-lg border-2 border-gray-500 z-10">
           <div className="w-12 h-4 bg-gray-300 rounded-full"></div>
        </div>

        <div className="bg-white p-12 rounded-lg border-t-4 border-blue-600 min-h-[600px] relative z-20">
           <div className="mb-10 flex justify-between items-start">
              <div>
                <span className="bg-yellow-400 px-4 py-1 font-bold text-xs uppercase tracking-widest mb-4 inline-block">Education & Diagnostic</span>
                <h2 className="text-4xl font-bold text-blue-900 tracking-tighter">Thinking Assessment</h2>
              </div>
              <div className="w-16 h-16 opacity-30">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                 <div className="flex gap-4">
                    <span className="text-xl font-bold text-gray-300">2026</span>
                    <div>
                       <h4 className="font-bold text-gray-800">The Pre-Session Test</h4>
                       <p className="text-sm text-gray-500">12 scenario questions designed to expose AI dependency vs. actual reasoning.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-xl font-bold text-gray-300">Analysis</span>
                    <div>
                       <h4 className="font-bold text-gray-800">AI Pattern Detection</h4>
                       <p className="text-sm text-gray-500">Identifying students who rely on LLMs without verifying system behavior.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <span className="text-xl font-bold text-gray-300">Report</span>
                    <div>
                       <h4 className="font-bold text-gray-800">Diagnostic Delivery</h4>
                       <p className="text-sm text-gray-500">A full batch profile delivered to HODs within 48 hours.</p>
                    </div>
                 </div>
              </div>

              <div className="bg-gray-50 p-6 rounded border-2 border-dashed border-gray-200 relative">
                 <div className="absolute -top-3 -right-3 bg-blue-600 text-white p-2 rounded transform rotate-12 shadow-lg marker">Sample Test!</div>
                 <p className="font-mono text-xs text-blue-800 mb-4 uppercase font-bold tracking-widest">System Incident #104</p>
                 <p className="text-sm italic text-gray-600 leading-relaxed">
                   "A web app fails with a 502 Bad Gateway. The Docker logs say 'Ready to handle connections'. Explain where the failure might sit without using Google."
                 </p>
                 <div className="mt-6 border-t pt-4 flex gap-4">
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 text-[10px] font-bold rounded">Networking</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 text-[10px] font-bold rounded">Logic</span>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 text-[10px] font-bold rounded">DevOps</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnostic;
