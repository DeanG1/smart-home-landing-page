import React from 'react'
import { Navigation } from "../Constants/Navigation"
const Navbar = () => {
  return (
    <div className='h-[5rem] flex justify-between px-[7rem] items-center border'>
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
        <div>
            
        </div>
    </div>
  )
}

export default Navbar