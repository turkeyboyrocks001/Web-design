
import React from 'react';

const Solution: React.FC = () => {
  const segments = [
    { title: "The Reality Check", color: "bg-blue-100 border-blue-300", tag: "Creative" },
    { title: "Real Incidents", color: "bg-amber-100 border-amber-300", tag: "Curious" },
    { title: "Thinking Framework", color: "bg-yellow-100 border-yellow-300", tag: "Meticulous" },
    { title: "Live Exercise", color: "bg-green-100 border-green-300", tag: "Practical" }
  ];

  return (
    <section className="py-20" id="solution">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-blue-900 tracking-tighter lowercase text-center">the intervention</h2>
          <p className="text-center handwritten text-2xl text-gray-500 mt-2">A 90-minute rewire for the student brain</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((s, idx) => (
            <div key={idx} className={`${s.color} p-8 rounded border-2 shadow-lg transform ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform cursor-default relative overflow-hidden`}>
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest opacity-40">{s.tag}</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800">{s.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Structured content that bridges the gap between YouTube tutorials and production reality.
              </p>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
