import React from 'react'
import footerlogo from '../assets/images/foterlogo.png'
import { Link } from 'react-router'
import { FaFacebookSquare, FaTwitter, FaYoutube } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import applogo from '../assets/images/footerappstore.png'
import goologo from '../assets/images/footergoogle.png'

const Footer = () => {
  return (
    <>
    
        
    <footer id='footer' className='bg-main'>
        <div className="container">
            <div id='footer-row' className='text-center flex flex-col justify-center'>
                <div className='pt-[64px] flex justify-center'><img src={footerlogo} alt="footer-logo" /></div>
                {/* ------------ footer-items */}
            <div className='pt-[48px] pb-[64px] flex justify-center'>
           <ul className='flex gap-[56px] items-center'>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Home</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Features</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Overview</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Blog</Link></li>
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Contact</Link></li>      
            <li><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] '>Account</Link></li>      
            </ul> 
            </div > 
{/* ----------------------- app link */}
            <div className='flex justify-center'>
            <div className='flex gap-[24px] text-center justify-center\'>
            <Link  to={'/'}><img className='rounded-[8px]' src={applogo} alt="footer-link-logo" /></Link>
            <Link to={'/'} ><img className='rounded-[8px]' src={goologo} alt="footer-link-logo" /></Link>
            </div>
            </div>
            {/* --------------- footer-icons */}
            <div className=' flex gap-[16px] pt-[56px] pb-[72px] justify-center items-center'>
               
                <div className='w-[44px] h-[44px] hover:bg-[#EFF2FC] hover:text-[#000] text-white rounded-[6px] flex justify-center items-center'> <Link  to={'/'} ><FaFacebookSquare className=' ' /></Link>  </div>
                <div className='w-[44px] h-[44px] hover:bg-[#EFF2FC] hover:text-[#000] text-white rounded-[6px] flex justify-center items-center'> <Link to={'/'}  ><FaTwitter className=' '  /></Link>  </div>
                <div className='w-[44px] h-[44px] hover:bg-[#EFF2FC] hover:text-[#000] text-white rounded-[6px] flex justify-center items-center'> <Link  to={'/'} ><PiInstagramLogoFill className=' ' /></Link>  </div>
                <div className='w-[44px] h-[44px] hover:bg-[#EFF2FC] hover:text-[#000] text-white rounded-[6px] flex justify-center items-center'> <Link  to={'/'} ><FaYoutube className=''  /></Link>  </div>

            </div>

            </div>
        </div>
    </footer>
    
    
    
    
    
    </>
  )
}

export default Footer