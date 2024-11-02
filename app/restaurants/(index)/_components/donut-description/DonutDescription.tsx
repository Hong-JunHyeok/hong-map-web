import React, { useState } from "react";

export default function DonutDescription() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const donuts = [
    { level: 1, description: "1도넛: 기본적인 맛을 제공하는 도넛입니다." },
    {
      level: 2,
      description:
        "2도넛: 창의성이 가미된 도넛으로, 더 나은 맛과 질감을 제공합니다.",
    },
    {
      level: 3,
      description:
        "3도넛: 다양한 재료와 기술이 조화를 이루어 잊을 수 없는 경험을 제공합니다.",
    },
    { level: 4, description: "4도넛: 최고의 품질을 자랑하는 도넛입니다." },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">도넛이란?</h2>
      <div className="space-y-2">
        {donuts.map((donut, index) => (
          <div
            key={donut.level}
            className="border rounded-md overflow-hidden shadow"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full bg-primary text-white text-left p-4 focus:outline-none hover:bg-primary transition duration-300"
            >
              {donut.level}도넛
            </button>
            <div
              className={`max-h-0 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4 bg-white" : "p-0"
              }`}
              aria-hidden={openIndex !== index}
            >
              {donut.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
