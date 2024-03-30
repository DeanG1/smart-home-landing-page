import React from 'react'
import Icons from '../Constants/Icons'

const Header = () => {
  return (
    <div className='w-full h-screen bg-primary'>
      {Icons.map((icon) => (
        <img src={icon.icon} key={icon.id} alt="" />
      ))}
    </div>
  )
}

export default Header