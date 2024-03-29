import React,{useState} from 'react'
import MenuSvg from '../assets/Menu'
import {Navigation} from "../Constants/Navigation"
import Button from "./Button";

const Navbar = () => {
  
  const [openNavigation, setOpenNavigation] = useState(false);

  const toogleNavigation = () => {
    if(openNavigation){
      setOpenNavigation(false)
    }
    else{
      setOpenNavigation(true)
    }
  }
  
  return (
    <div className="w-full h-full lg:h-[6rem] flex justify-center items-start lg:items-center z-1 fixed bg-transparent">
      <nav className="w-full h-auto px-[4rem] flex justify-around items-center pt-4">
        <div className='nav-links w-[24rem] h-full flex justify-center items-center'>
          <ul className={`${openNavigation ? "flex flex-col absolute top-20 left-0 leading-[2.8rem]" : "hidden"} px-8 md:px-0 lg:flex-row lg:flex w-full h-auto md:items-center items-start justify-around`}>
            {Navigation.map((item) => (
              <a className={item.className} href={item.url} key={item.id}>{item.title}</a>
            ))}
            <div className={`${openNavigation ? "flex flex-col items-start justify-center px-3" : "hidden"} text-white md:text-black`}>
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
            </div>
          </ul>
        </div>
        <div className='logo h-auto w-full pr-[7rem] md:pr-0 flex justify-center items-center'>
          <h2 className='text-white text-3xl font-bold mb-2'>smartHome</h2>
        </div>
        <div className='btn-container hidden lg:flex'>
          <button className='text-white'>Login</button>
          <Button>Sign Up</Button>
        </div>
        <div onClick={toogleNavigation} className='ml-4 menu lg:hidden flex'>
          <MenuSvg openNavigation={openNavigation}/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar