import React from "react";
import ClientsInfo from "../Constants/ClientsInfo";
const Clients = () => {
  return (
    <div className="clients-container w-full h-auto">
      <div className="w-full h-auto flex justify-center items-center flex-col">
        <div className="w-full h-auto flex justify-center items-center flex-col">
          <h1 className="text-8xl text-secondary font-black">Our Clients</h1>
          <p className="text-center text-primary text-lg py-8">
            Wisdom new and valley answer. Contented it so is discourse
            recommend. Man its upon <br /> him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
        </div>
        <div className="w-full h-auto flex justify-center items-center px-[4rem]">
            <ul className="grid grid-rows-2 grid-cols-4 gap-x-12 ">
                {ClientsInfo.map((client) => (
                    <li key={client.id} className="flex justify-center items-center w-[17rem] h-auto border-2 border-primary rounded-lg">
                        <img src={client.image} width={150} className="py-2" alt={client.alt}/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
