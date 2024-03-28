import React from "react";
import { Navigation } from "../Constants/Navigation";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className="w-full h-[6rem] flex justify-between px-[8rem] bg-none items-center fixed z-2">
      <div className="nav-links">
        <ul className="h-auto w-[22rem] flex justify-between items-center">
          {Navigation.map((item) => (
            <li className="text-white text-lg font-normal tracking-wide">
              <a href={item.url} key={item.id}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="logo h-auto w-[20rem] flex justify-start items-center">
        <h2 className="text-white text-4xl mb-3 traking-wider font-bold">smartHome</h2>
      </div>
      <div className="flex w-[15rem] justify-evenly items-center">
        <button className="bg-none">Login</button>
        <Button className="bg-white">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
