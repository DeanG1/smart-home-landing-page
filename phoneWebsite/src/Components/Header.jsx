import React from "react";
import phones from "../assets/Images/phones.png";
import Icons from "../Constants/Icons";
import corner from "../assets/Images/corner.png";
import figures from "../assets/Images/figures.png";

const Header = () => {
  return (
    <div className="w-full h-screen bg-primary">
      <div className="w-full h-auto flex justify-center items-center flex-col">
        <div className="header-title w-1/2 h-[20rem] flex justify-center items-center flex-col mt-28 ">
          <h1 className="text-white text-7xl font-bold  text-center">
            Smart Home <br /> Application
          </h1>
          <p className="text-white text-center mt-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            eius? Nesciunt <br /> voluptatem quo repellendus veniam magni
            repellat vel aliquid .
          </p>
        </div>
        <div className="phone-container flex justify-center items-center w-full h-auto">
          <div className="absolute w-full h-full top-[23rem] left-0 flex justify-center items-center">
            <img src={phones} className="w-auto" alt="phones" />
          </div>
        </div>
        <div className="corner-container hidden lg:block absolute top-0 right-0">
          <img src={corner} className="w-[12rem]" alt="corner here" />
        </div>
      </div>
      <div className="figures-container w-full h-full hidden lg:flex items-center justify-center absolute top-20 mx-auto z-3">
        <img src={figures} className="w-3/4" alt="figures here" />
      </div>
      <div className="w-auto h-[14rem] leading-10 lg:flex flex-col justify-between items-center absolute left-20 bottom-20 hidden">
        {Icons.map((icon) => (
          <img src={icon.icon} className="w-[1.3rem]" key={icon.id} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Header;
