import { useState } from "react";

const faqs = [
  { question: "What is this meetup about?", answer: "This meetup is for tech enthusiasts to network and share knowledge." },
  { question: "Where are the events located?", answer: "The events are located in Chicago, IL. Check our event listings for details." },
  { question: "Is there an entry fee?", answer: "Depending on the hosts of the events, each event will have either free tickets or priced tickets." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left flex justify-between items-center py-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600 bg-gray-100 p-3 rounded-md">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
