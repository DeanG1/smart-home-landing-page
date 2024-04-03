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
        <div className="w-full h-auto flex justify-center items-center ">
          <div className="w-3/5 h-auto ">
            <img src={phone1} alt="phone image" />
          </div>
          <div className="w-2/5 h-auto flex justify-center items-center">
            <h3>Smart Home’s Smart Services</h3>
            <p>
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
