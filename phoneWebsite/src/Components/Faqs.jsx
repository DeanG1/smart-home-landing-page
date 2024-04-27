import FaqsInfo from "../Constants/FaqsInfo";
import React, { useState } from "react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faqs-main-container w-full h-auto mt-[10rem]">
      <h1 className="faqs-title text-8xl font-bold text-center">FAQ'S</h1>
      <div className="w-full h-auto flex justify-center items-center mt-[6rem]">
        <div className="w-full h-auto flex justify-center items-center flex-col">
          <ul className="flex w-1/2 h-auto justify-evenly flex-col items-center gap-8">
            {FaqsInfo.map((faq, index) => (
              <li
                onClick={() => handleClick(index)}
                className={`flex w-full justify-center items-center border rounded-xl gap-x-12 ${
                  openIndex === index ? "h-[12rem]" : "h-[5rem] bg-light_bg"
                }`}
                key={faq.id}
              >
                {openIndex === index ? (
                  <img
                    src={faq.image2}
                    className="mb-[6.6rem]"
                    width={30}
                    alt={faq.alt}
                  />
                ) : (
                  <img src={faq.image1} width={30} alt={faq.alt} />
                )}

                <div className="flex justify-center flex-col items-start h-auto w-4/5">
                  <p className="text-lg font-medium">{faq.question}</p>
                  <p
                    className={`pt-3 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
