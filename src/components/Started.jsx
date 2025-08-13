import React from 'react'
import CommonHead from './common/CommonHead'

const Started = () => {
  return (
    <>

    <section id='started' className='pt-[112px] bg-[#F3F6FF]'>
        <div className="container">
            <div id='start-row' className='pb-[96px]'>
            <div className='text-center'><h2 className='text-[40px] font-extrabold font-main text-main'>Ready to Get Started? </h2></div>
                <div className=' text-center pt-[24px] pb-[43px]'><p className='text-[24px] font-normal font-main text-primary'>Organize your tasks with a 14-day free trial</p></div>
{/* --------------------- button */}
                <div className='text-center'>
                <button className='w-[151px]  bg-[#6366F1] py-[13px] px-[32px] text-[16px] font-semibold font-main text-[#fff] rounded-[6px] '>Ger started</button>

                </div>


            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Started