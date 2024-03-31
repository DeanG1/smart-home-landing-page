import React from 'react'
import phones from "../assets/Images/phones.png"
import Icons from '../Constants/Icons'


const Header = () => {
  return (
    <div className='w-full h-screen bg-primary'>
      <div className='w-full h-auto flex justify-center items-center flex-col'>
        <div className="header-title w-1/2 h-[20rem] flex justify-center items-center flex-col mt-28 ">
          <h1 className="text-white text-8xl font-bold text-center">Smart Home <br /> Application</h1>
          <p className='text-white text-center mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eius? Nesciunt voluptatem quo repellendus veniam magni repellat vel aliquid, laudantium sapiente.</p>
        </div>
        <div className="phone-container flex justify-center items-center w-full h-auto">
          <div className='absolute w-full h-full top-[26rem] left-0 flex justify-center items-center'>
            <img src={phones} className='object-contain' alt="phones" />
          </div>
        </div>
      </div>
      {/* {Icons.map((icon) => (
        <img src={icon.icon} key={icon.id} alt="" />
      ))} */}
    </div>
  )
}

export default Header