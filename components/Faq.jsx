"use client";

import { faqData } from "@/assets/data";
import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {faqData.map((item, index) => (
        <div key={index} className="mb-6">
          <div
            onClick={() => handleClick(index)}
            className={`flex items-center justify-between p-4 bg-teal-500 text-white cursor-pointer rounded-t-lg`}
          >
            <h3 className="font-semibold">{item.question}</h3>
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === index ? "rotate-90" : ""
              }`}
            >
              &gt;
            </span>
          </div>
          <div
            className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="mt-2 p-4 bg-white rounded-b-lg">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
