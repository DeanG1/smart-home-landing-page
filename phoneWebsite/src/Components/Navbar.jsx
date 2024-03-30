import React, { useState } from "react";
import MenuSvg from "../assets/Menu";
import { Navigation } from "../Constants/Navigation";
import Button from "./Button";

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toogleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <div className="w-full h-full lg:h-[6rem] flex justify-center items-start lg:items-center z-1 fixed bg-transparent">
      <nav className="w-full h-auto lg:px-[5rem] xl:px-[7rem] md:px-[4rem] flex justify-around items-center pt-4">
        <div className="nav-links w-[24rem] h-full flex justify-center items-center">
          <ul
            className={`${
              openNavigation
                ? "flex flex-col absolute top-20 left-0 leading-[2.8rem]"
                : "hidden"
            } px-7 lg:px-0 lg:flex-row lg:flex w-full h-auto md:items-center items-start justify-between`}
          >
            {Navigation.map((item) => (
              <a className={`${item.className} xl:text-lg xl:ml-4`} href={item.url} key={item.id}>
                {item.title}
              </a>
            ))}
            <div
              className={`${
                openNavigation
                  ? "flex flex-col items-start md:items-center justify-center px-3"
                  : "hidden"
              } text-white lg:text-black`}
            >
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </ul>
        </div>
        <div className="logo h-auto w-full xl:mr-[7rem] pr-[5rem] md:pr-[7rem] lg:pr-0 flex justify-center items-center">
          <h2 className="text-white text-4xl font-bold mb-2">smartHome</h2>
        </div>
        <div className="btn-container hidden lg:flex items-center justify-between">
          <button className="text-white mr-10">Login</button>
          <Button>
            <span>Sign Up</span>
          </Button>
        </div>
        <div onClick={toogleNavigation} className="mr-6 menu lg:hidden flex">
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
