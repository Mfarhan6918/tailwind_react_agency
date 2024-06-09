import React, { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
    // let menu=['Home', 'About us', 'Resources', 'Services', 'Contact us'];
    const[toggle, setToggle]=useState(false);
  return (
        <div className='bg-[#2699fb] p-3'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
                <div>
                    <FaReact size={40} className=' text-white animate-spin'/>
                </div>
                {
                toggle ? <AiOutlineClose onClick={()=>{setToggle(!toggle)}} className='text-white text-2xl md:hidden block' />
                :<AiOutlineMenu onClick={()=>{setToggle(!toggle)}} className='text-white text-2xl md:hidden block' />
                }
                <ul className='hidden md:flex gap-10 text-white'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Resources</li>
                    <li>Services</li>
                    <li>Contact us</li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`md:hidden absolute top-0 bg-black w-[70%] h-screen 
                gap-10 text-white pe-6 duration-500 ${toggle? 'left-0' : '-left-full'}`}>
                    <li className='md:p-0 p-4 mt-16 border-b border-[#444]'>Home</li>
                    <li className='md:p-0 p-4 border-b border-[#444]'>About us</li>
                    <li className='md:p-0 p-4 border-b border-[#444]'>Resources</li>
                    <li className='md:p-0 p-4 border-b border-[#444]'>Services</li>
                    <li className='md:p-0 p-4'>Contact us</li>
                </ul>
            </div>
        </div>
  )
}
export default Header