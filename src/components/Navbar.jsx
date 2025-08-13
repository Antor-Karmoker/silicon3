import React from 'react'
import { Link } from 'react-router'
import navlogo from '../assets/images/foterlogo.png'
import { PiSignOutBold } from 'react-icons/pi'
import { LuUser } from 'react-icons/lu'
import { BiSolidToggleLeft } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
    
        <nav id='navbar' className='bg-main'>
        <div className="container">
            <div id='navbar-row' className='flex justify-between items-center py-[16px]'>
              {/* ----------- nav-logo  */}
              <Link to={'/'}   ><img src={navlogo} alt="nav-logo" /></Link>
              
              {/* -------------- nav-items */}
              <div>
                <ul className='flex items-center gap-[24px]'>
                  <li><Link to={'/'}   className='text-[16px] dark:text-white font-semibold font-main text-primary'>Features</Link></li>
                  <li><Link to={'/'}   className='text-[16px] dark:text-white font-semibold font-main text-primary'>Overview</Link></li>
                  <li><Link to={'/'}   className='text-[16px] dark:text-white font-semibold font-main text-primary'>Blog</Link></li>
                  <li><Link to={'/'}   className='text-[16px] dark:text-white font-semibold font-main text-primary'>Contact</Link></li>
                </ul>
              </div>
              {/* ------------- mode */}
              <div className='flex gap-[16px] items-center'>
                <h2 className='text-[16px] font-semibold dark:text-white font-main text-[#585C7B]'>Light</h2>
                <button><BiSolidToggleLeft className='text-[#6366F1] text-[46px]' /></button>
                <h2 className='text-[16px] font-semibold dark:text-white font-main text-[#585C7B]'>Dark</h2>
              </div>
              {/* -------------- login + sign up */}
              <div className='flex gap-[16px] items-center'>
                <Link to={'/'}   className='w-[111px] bg-[#6366F1] hover:bg-transparent hover:border  rounded-[4px] flex gap-[8px] items-center justify-center py-[9px] text-[14px] font-semibold font-main  text-[#fff]' > <PiSignOutBold className='text-[18px] hover:text-[#fff]' /> Sign in</Link>
                <Link to={'/'}   className='w-[116px] bg-[#6366F1] rounded-[4px] hover:bg-transparent hover:border  flex gap-[8px] items-center justify-center py-[9px] text-[14px] font-semibold font-main  text-[#fff]' >     <LuUser className='text-[18px] hover:text-[#fff]' /> Sign up</Link>
                </div>
            </div>
        </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar