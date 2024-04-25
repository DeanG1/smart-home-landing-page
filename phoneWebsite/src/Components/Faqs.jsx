import FaqsInfo from "../Constants/FaqsInfo";
import React, { useState } from "react";

const Faqs = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="faqs-main-container w-full h-auto mt-[10rem]">
      <h1 className="faqs-title text-8xl font-bold text-center">FAQ'S</h1>
      <div className="w-full h-auto flex justify-center items-center mt-[6rem]">
        <div className="w-full h-auto flex justify-center items-center flex-col">
          {[0, 1, 2, 3, 4].map((index) => (
            <ul
              key={index}
              onClick={() => handleClick(index)}
              className={`w-[44rem] ${
                openSection === index ? "h-auto" : "h-[6rem]"
              } flex justify-center items-center flex-col border mt-4`}
            >
              {FaqsInfo.map((faq) => (
                <React.Fragment key={faq.id}>
                  <li
                    className={`w-full h-auto flex justify-start text-center gap-12 items-start ml-24 ${
                      openSection === index ? "pt-8" : "pt-0"
                    }`}
                  >
                    <img src={faq.image} width={34} alt="" />
                    {faq.question}
                  </li>
                  {openSection === index && (
                    <p className="w-4/5 ml-[7.7rem]">
                      <p className="w-full pb-4">{faq.answer}</p>
                    </p>
                  )}
                </React.Fragment>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
