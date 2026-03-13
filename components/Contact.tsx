
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-3xl mx-auto bg-amber-200 p-12 rounded-sm shadow-2xl border-l-[40px] border-amber-300 relative">
        <div className="absolute top-4 left-4 flex flex-col gap-4 opacity-20">
           <div className="w-4 h-4 rounded-full bg-black"></div>
           <div className="w-4 h-4 rounded-full bg-black"></div>
           <div className="w-4 h-4 rounded-full bg-black"></div>
        </div>

        <h2 className="marker text-5xl mb-12">Contact me!</h2>
        
        <form className="space-y-6">
           <div className="border-b-2 border-black/10 py-2">
              <label className="text-[10px] font-bold uppercase text-black/40">Institution Name</label>
              <input type="text" className="bg-transparent w-full outline-none font-bold text-lg marker placeholder:text-black/10" placeholder="Type here..." />
           </div>
           <div className="border-b-2 border-black/10 py-2">
              <label className="text-[10px] font-bold uppercase text-black/40">Contact Email</label>
              <input type="email" className="bg-transparent w-full outline-none font-bold text-lg marker placeholder:text-black/10" placeholder="name@college.edu" />
           </div>
           <div className="border-b-2 border-black/10 py-2">
              <label className="text-[10px] font-bold uppercase text-black/40">Your Message</label>
              <textarea rows={3} className="bg-transparent w-full outline-none font-bold text-lg marker placeholder:text-black/10" placeholder="Hello Suraj..."></textarea>
           </div>
           <button type="button" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
              Send Memo
           </button>
        </form>

        <div className="mt-12 pt-8 border-t border-black/10 flex justify-between items-center">
           <div className="text-xs font-bold text-black/40">
              <p>SURAJ KARTHIC</p>
              <p>hello@surajkarthic.com</p>
           </div>
           <div className="flex gap-4 grayscale opacity-40">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
