
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-blue-900 tracking-tighter lowercase">investment</h2>
          <p className="handwritten text-2xl text-gray-500 mt-2">Transparent pricing for engineering excellence</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-8 w-72 shadow-xl border-b-8 border-blue-600 rounded-sm transform -rotate-2">
             <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Tier 1</h4>
             <p className="text-3xl font-bold text-blue-900 mb-6">₹12,000</p>
             <ul className="text-xs space-y-2 text-gray-500 font-medium">
                <li>★ 90-Min Session</li>
                <li>★ Diagnostic Report</li>
                <li>★ Question Bank</li>
             </ul>
          </div>

          <div className="bg-blue-600 p-8 w-72 shadow-2xl border-b-8 border-amber-400 rounded-sm text-white transform rotate-1 scale-110 relative z-10">
             <div className="absolute -top-4 -right-4 bg-amber-400 text-black font-bold text-[10px] px-3 py-1 rounded-full shadow-lg marker uppercase">Top Pick</div>
             <h4 className="font-bold text-xs uppercase tracking-widest text-blue-200 mb-4">Tier 2 & 3</h4>
             <p className="text-3xl font-bold mb-6">₹10,000</p>
             <ul className="text-xs space-y-2 text-blue-100 font-medium">
                <li>★ Complete Package</li>
                <li>★ Full Materials</li>
                <li>★ Priority Support</li>
             </ul>
          </div>

          <div className="bg-white p-8 w-72 shadow-xl border-b-8 border-green-600 rounded-sm transform rotate-2">
             <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Special</h4>
             <p className="text-3xl font-bold text-green-700 mb-6">FREE</p>
             <ul className="text-xs space-y-2 text-gray-500 font-medium">
                <li>★ Rural Institutions</li>
                <li>★ High Impact Need</li>
                <li>★ Subject to Approval</li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
