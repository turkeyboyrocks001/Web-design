
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center group"
      >
        <span className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 animate-fadeIn">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What engineering branches can benefit from this lecture?",
      answer: "Primarily CSE, IT, ECE, and related branches. The systems thinking framework applies broadly, but technical examples focus on DevOps, Cloud, and distributed systems."
    },
    {
      question: "Our students already have cloud certifications. Is this still relevant?",
      answer: "Absolutely. Certifications often test memorization. This session tests—and teaches—reasoning through system behavior and failures. Certified students often struggle most because they confuse credential collection with understanding."
    },
    {
      question: "Can this be delivered online or must it be in-person?",
      answer: "Both formats are available. In-person is preferred for maximum impact. Online sessions work best with engaged batches of 30-50 students max. Pricing remains consistent."
    },
    {
      question: "What's the ideal batch size?",
      answer: "40-100 students for in-person sessions allow for the best interaction and engagement quality."
    },
    {
      question: "How do we measure if the session was effective?",
      answer: "We use pre/post diagnostic assessments, monitor the quality of student questions during the session, and offer optional follow-up surveys to track application of the thinking framework."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions from Institutions</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
          {faqs.map((f, idx) => (
            <FAQItem key={idx} question={f.question} answer={f.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
