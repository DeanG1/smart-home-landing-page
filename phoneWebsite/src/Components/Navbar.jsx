import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "../Constants/Navigation";
import MenuSvg from "../assets/Menu";
import Button from "./Button";
const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toogleNavigation = () => {
    if(openNavigation){
      setOpenNavigation(false);
    }
    else{
      setOpenNavigation(true);
    }
  }
  const handleClick = () => {
    if(!openNavigation) return;
    setOpenNavigation(false);
  }

  return (
    <div className="w-full h-[6rem] pt-4 flex justify-between px-[8rem] bg-none items-center fixed z-2">
      <nav>
        <ul className={`${openNavigation ? "block" : "hidden"} h-auto w-[22rem] flex justify-between items-center`}>
          {Navigation.map((item) => (
            <li
              onClick={handleClick}
              key={item.id}
              className="text-white text-lg font-normal tracking-wide"
            >
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logo h-auto w-[20rem] flex justify-start items-center">
        <h2 className="text-white text-4xl mb-3 traking-wider font-bold">
          smartHome
        </h2>
      </div>
      <div className="flex w-[15rem] justify-between items-center">
        <button className="bg-none text-lg text-white">Login</button>
        <Button>
          <span className="text-lg">Sign Up</span>
        </Button>
        <button className="ml-auto lg:hidden" onClick={toogleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
