import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const AboutCommon = () => {
  return (
    <div>

        <div className='w-[306px] h-[350px] relative rounded-[8px]'>
            <div className='w-[44px] h-[44px] absolute top-[-20px] left-[32px] flex justify-center z-20 items-center rounded-[8px] bg-[#6366F1]'><RiDoubleQuotesL className='text-[20px] text-white' /></div>
            <div className='w-full h-[258px] pt-[48px] px-[24px]  shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[8px]'>
                <div className='w-[263px] ' ><p className='text-[16px] font-normal font-main text-primary'>Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p></div>

                {/* ------------ star */}
                <div className='flex items-center pt-[16px] '>
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                    <FaStar className='text-[#FFBA08]' />
                </div>

            </div>
            <div className='pt-[24px] flex gap-[16px]'>
                <div className='w-[48px] h-[48px] rounded-full bg-gray-200'><img src="" alt="" /></div>
                <div>
                    <h2 className='text-[14px] font-bold font-main text-main' >Robert Fox</h2>
                    <p className='text-[12px] font-main font-normal text-[#9397AD]'>Co-founder of Lorem Company</p>
                </div>
            </div>

        </div>











    </div>
  )
}

export default AboutCommon