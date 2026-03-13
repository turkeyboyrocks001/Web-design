
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="relative py-20" id="problem">
      <div className="bg-yellow-50 p-12 rounded-xl shadow-lg border-2 border-yellow-200 relative overflow-hidden transform rotate-1">
        {/* Washi Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-10 tape clip-path-tape opacity-80 z-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
               <h2 className="text-4xl font-bold text-gray-900 mb-6 marker">The Gap Between Resume and Reality</h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-6">
                 Your students list Docker, Kubernetes, and AWS. But they can't explain <span className="bg-red-200 px-1 font-bold">why systems fail.</span> 
               </p>
               <div className="bg-white p-6 rounded shadow-inner border border-yellow-200 italic text-gray-500">
                  "Most are tool operators, not engineers. They've memorized vocabulary without understanding grammar."
               </div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4">
               <div className="bg-green-100 p-4 rounded shadow-sm transform -rotate-1 border border-green-200">
                  <h4 className="font-bold text-green-800 text-xs uppercase mb-2">Resume:</h4>
                  <p className="text-sm font-medium">"I can deploy apps using Docker and CI/CD."</p>
               </div>
               <div className="bg-red-100 p-4 rounded shadow-sm transform rotate-1 border border-red-200">
                  <h4 className="font-bold text-red-800 text-xs uppercase mb-2">Reality:</h4>
                  <p className="text-sm font-medium">"I don't know why my request is timing out at the load balancer."</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
