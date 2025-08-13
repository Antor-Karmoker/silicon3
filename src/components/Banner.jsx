import React from 'react'
import { Link } from 'react-router'
import bannerimg from '../assets/images/bannerimg.png'


const Banner = () => {
  return (
    <>
    
    <section id='banner' className='bg-main relative'>
        <div className="container">
            <div id='banner-row' className='pb-[500px] text-center'>

                {/* ----------- heading h2 */}
                <div className='text-center flex justify-center'>
                <div className='w-[856px] pt-[128px] text-center'><h2 className='text-[56px] font-extrabold font-main text-[#fff]'>Task Management Assistant You Gonna Love</h2></div>
                </div>

                {/* --------------- description */}

                <div className='flex justify-center'>
                <div className='w-[856px] text-center pt-[32px] pb-[48px]'>
                    <p className='text-[18px] font-normal font-main text-white'>We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
                </div>
                </div>

                {/* ---------------- button */}

                <div className='flex justify-center'>
                <div className='w-[190px] text-center py-[13px] px-[32px] rounded-[6px] bg-extra  '><Link to={'/'} className='text-[16px] font-semibold font-main text-[#fff] py-[13px]' >Get early access</Link></div>
                </div>



            </div>
            {/* ---------------- floting img */}
            <div className=' absolute top-[600px] left-[300px] '><img src={bannerimg} alt="banner-img" /></div>
        </div>
    </section>
    
    
    
    </>
  )
}

export default Banner