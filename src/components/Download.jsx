import React from 'react'
import downimg from '../assets/images/down-image.png'
import { FaStar } from "react-icons/fa";
import appstroe from '../assets/images/appstore.png'
import gooplay from '../assets/images/googleplay.png'

const Download = () => {
  return (
    <>
    
    <section id='download' className=' mt-[112px]'>
        <div className="container">
            <div id='down-row' className='bg-[#F3F6FF] py-[56px] flex justify-around items-center'>
{/* --------------- left-side */}
             <div><img src={downimg} alt="down-img" /></div>
{/* ------------- right-side */}
            <div>


{/* ----------------- no 1 div */}
            <div>
            <div className='w-[416px]'><h2 className='text-[40px] font-extrabold font-main text-main'>Download Our App for Any Devices</h2></div>
            <div>
                <div className='pt-[48px]'>
                <p className='text-[16px] font-normal font-main text-[#9397AD]'>App Store</p>
                </div>
                <div className='flex pt-[8px]'>
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar  className='text-[#FFBA08]' />
                </div>

                {/* ------------- */}

                <div className='flex gap-[40px] items-center pt-[16px] '>
                    <div>
                    <h2 className='text-[24px] font-extrabold font-main text-main'>Editor's Choice</h2>
                    <p className='text-[16px] pt-[4px] font-normal font-main text-primary'>rating 4.7, 187K+ reviews</p>
                    </div>
                    <div><img src={appstroe} alt="logo" /></div>
                </div>
            </div>

            </div>  


            {/* ------------ no 2 div */}
     
            <div>
                <div className='pt-[48px]'>
                <p className='text-[16px] font-normal font-main text-[#9397AD]'>Play Store</p>
                </div>
                <div className='flex pt-[8px]'>
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar className='text-[#FFBA08]'  />
                <FaStar  className='text-[#FFBA08]' />
                </div>

                {/* ------------- */}

                <div className='flex gap-[40px] items-center pt-[16px] '>
                    <div>
                    <h2 className='text-[24px] font-extrabold font-main text-main'>Editor's Choice</h2>
                    <p className='text-[16px] pt-[4px] font-normal font-main text-primary'>rating 4.7, 187K+ reviews</p>
                    </div>
                    <div><img src={gooplay} alt="logo" /></div>
                </div>
            </div>

        </div>
     
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Download