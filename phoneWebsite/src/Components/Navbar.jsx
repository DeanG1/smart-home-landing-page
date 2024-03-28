import React from 'react'
import { Navigation } from "../Constants/Navigation"
import Button from './Button'
const Navbar = () => {
  return (
    <div className='w-full h-[5rem] flex justify-between px-[7rem] bg-none items-center border fixed z-2'>
        <div className='nav-links'>
            <ul className='flex justify-center items-center'>
                {Navigation.map((item) =>(
                    <li>
                        <a href={item.url}
                        key={item.id}
                        >{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='logo'>
            <h2>SmartHome</h2>
        </div>
        <div className='flex w-[15rem] justify-evenly items-center'>   
            <button className="bg-none">
                Login
            </button>
            <Button className="bg-white">
                Sign Up
            </Button>
        </div>
    </div>
  )
}

export default Navbar