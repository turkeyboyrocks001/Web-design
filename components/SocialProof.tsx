
import React from 'react';

const SocialProof: React.FC = () => {
  const testimonials = [
    { text: "Awesome bro, Now I have an idea with cyber security.", author: "Sabarish Gopal K", color: "bg-pink-100" },
    { text: "Best & Cool session ever had.", author: "Surendhiran R", color: "bg-blue-100" },
    { text: "The session was interesting as well as useful.", author: "Rohini S", color: "bg-yellow-100" }
  ];

  return (
    <section className="py-20" id="social-proof">
      <div className="max-w-5xl mx-auto px-4">
         <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tighter mb-4">In the Classroom</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
         </div>

         {/* Teaching Photo Section */}
         <div className="mb-20 max-w-4xl mx-auto">
            <div className="relative group rounded-lg overflow-hidden shadow-2xl border-8 border-white transform rotate-1">
               {/* USER: Replace this src path with your actual uploaded image file path */}
               <img 
                 src="https://ibb.co/hRw6ryLM" 
                 alt="Suraj K teaching students" 
                 id="teaching-photo"
                 className="w-full object-cover"
                 style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover' }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white text-xl font-bold marker">Bridging the gap between tools and logic.</p>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-10 mb-20">
            {testimonials.map((t, i) => (
              <div key={i} className={`${t.color} w-64 h-64 p-8 shadow-xl border-t-8 border-black/10 flex flex-col justify-between transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:scale-105 transition-transform cursor-default`}>
                <p className="marker text-xl leading-snug">"{t.text}"</p>
                <div>
                   <p className="font-bold text-xs uppercase tracking-tighter">{t.author}</p>
                </div>
              </div>
            ))}
         </div>
         
         {/* Past Engagements Banner */}
         <div className="mt-20 bg-blue-900 text-white p-8 rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg className="w-40 h-40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <h3 className="text-3xl font-bold mb-8 italic">Past Workshops ★</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-[10px] font-black uppercase text-blue-300">Cyber Vault</p>
                  <p className="text-sm font-bold">100+ Students trained daily for 2 months.</p>
               </div>
               <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-[10px] font-black uppercase text-blue-300">Technodot, Kerala</p>
                  <p className="text-sm font-bold">2-day intense Cloud & DevOps immersion.</p>
               </div>
               <div className="border-l-2 border-white/20 pl-4">
                  <p className="text-[10px] font-black uppercase text-blue-300">Networking</p>
                  <p className="text-sm font-bold">Foundation series for security aspirants.</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default SocialProof;
