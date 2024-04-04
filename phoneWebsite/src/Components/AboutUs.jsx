import React from "react";
import google_play from "../assets/Images/google-play.png";
import apple_store from "../assets/Images/apple_store.png";
import phone1 from "../assets/Images/phone1.png";

const AboutUs = () => {
  return (
    <div className="w-full h-auto pt-[24rem]">
      <div className="btn-container w-full h-auto flex justify-center items-center gap-16">
        <div className="apple-store w-[14rem] bg-black h-auto py-2 rounded-2xl border flex justify-center items-center">
          <div className="icon-btn">
            <img src={apple_store} width={60} alt="" />
          </div>
          <div className="text-btn text-white">
            <p className="font-semibold">Download on the</p>
            <p className="text-3xl font-semibold">App Store</p>
          </div>
        </div>
        <div className="google-play w-[14rem] bg-black h-auto p-2 rounded-2xl border flex justify-center items-center">
          <div className="icon-btn">
            <img src={google_play} width={40} alt="" />
          </div>
          <div className="text-btn text-white">
            <p className="font-semibold">Get it on</p>
            <p className="text-3xl font-semibold tracking-tight">Google Play</p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center flex-col items-center mt-[10rem]">
        <h1 className="text-8xl font-black">About Us</h1>
        <div className="w-full h-auto flex justify-center items-center gap-[5rem] mt-[12rem]">
          <div className="square-bg-container relative w-[38rem] h-auto flex justify-center items-center mt-[12rem]">
            <div className="w-full h-[22rem] bg-primary rounded-xl ">
            </div>
            <div className="absolute w-[60rem] h-[80rem] top-[-30rem] left-[-10rem]">
              <img src={phone1} alt="phone1" />
            </div>
          </div>
          <div className="w-1/3  h-auto flex justify-center items-start flex-col mb-[13rem]">
            <h3 className="font-semibold py-2 text-5xl">Smart Home’s Smart Services</h3>
            <p className="text-xl tracking-wide leading-8 text-primary pt-6">
              Ye am depending propriety sweetness distrusts belonging collected.
              Smiling mention he in thought equally musical. Wisdom new and
              valley answer. Contented it so is discourse recommend. Man its
              upon him call mile. An pasture he himself believe ferrars besides
              cottage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
