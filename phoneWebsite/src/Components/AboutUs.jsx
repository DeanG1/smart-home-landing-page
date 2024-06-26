import React from "react";
import phone1 from "../assets/Images/phone1.png";
import phone2 from "../assets/Images/phone2.png";
import phone3 from "../assets/Images/phone3.png";
import ButtonReusable from "./ButtonReusable";

const AboutUs = () => {
  return (
    <div className="w-full h-auto pt-[20rem] pb-[13rem]">
      <ButtonReusable />
      <div className="w-full h-auto flex justify-center flex-col items-center mt-[7rem]">
        <h1 className="text-xl7-1/2 font-bold text-secondary ">About us</h1>
        <div className="w-full h-auto flex justify-center items-center gap-[5rem] mt-[12rem]">
          <div className="square-bg-container relative w-[38rem] h-auto flex justify-center items-center mt-[12rem]">
            <div className="w-[34rem] h-[22rem] bg-primary rounded-xl "></div>
            <div className="absolute w-[47rem] right-[6rem] mb-6">
              <img src={phone1} alt="phone1" />
            </div>
          </div>
          <div className="w-1/3  h-auto flex justify-center items-start flex-col mb-[4rem]">
            <h3 className="font-bold py-2 text-5xl ">
              Smart Home’s Smart Services
            </h3>
            <p className="text-2xl tracking-wide leading-8 text-primary py-6 ">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
            <button className="bg-btn_background text-white text-xl font-semibold px-8 py-4 mt-8 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-evenly items-center pt-[8rem]">
        <div className="left-side w-[30rem] ml-[7rem] h-auto flex justify-center items-start flex-col">
          <h3 className="font-bold text-5xl ">
            What app can do to your Appliences?
          </h3>
          <p className="text-2xl tracking-wide leading-8 text-primary pt-12">
            Ye am depending propriety sweetness distrusts belonging collected.
            Smiling mention he in thought equally musical. Wisdom new and valley
            answer. Contented it so is discourse recommend. Man its upon him
            call mile. An pasture he himself believe ferrars besides cottage.
          </p>
          <button className="bg-white border-primary border-2 border-secondary text-xl font-semibold px-10 py-4 mt-8 rounded-md">
            Learn More
          </button>
        </div>
        <div className="square-bg-container relative w-[38rem] h-auto flex justify-center items-center mt-4">
          <div className="w-[34rem] h-[22rem] bg-primary rounded-xl mt-[12rem]"></div>
          <div className="absolute w-[63rem] right-[-8rem]">
            <img src={phone2} alt="phone2" />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center flex-col items-center ">
        <div className="w-full h-auto flex justify-center items-center gap-[5rem] mt-[12rem]">
          <div className="square-bg-container relative w-[38rem] h-auto flex justify-center items-center mt-[12rem]">
            <div className="w-[34rem] h-[22rem] bg-primary rounded-xl "></div>
            <div className="absolute w-[63rem] top-[-32rem] left-[-9rem]">
              <img src={phone3} alt="phone1" />
            </div>
          </div>
          <div className="w-1/3  h-auto flex justify-center items-start flex-col mb-[4rem]">
            <h3 className="font-bold py-2  text-5xl ">
              Control Electric Appliences
            </h3>
            <p className="text-2xl tracking-wide leading-8 text-primary py-6 ">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
            <button className="bg-white border-2 border-primary text-xl font-semibold px-8 py-4 mt-8 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
