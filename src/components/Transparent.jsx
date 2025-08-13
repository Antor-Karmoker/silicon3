import React from 'react'
import CommonHead from './common/CommonHead'
import TransparentCommon from './common/TransparentCommon'

const Transparent = () => {
  return (
    <>
    
    <section id='Transparent' className='pt-[118px]'>
        <div className="container">
            <div className='flex justify-center'><CommonHead comh2={'Transparent Pricing for You'} /></div>
            <div id='Transparent-row'>
                <div className='flex justify-center pt-[24px]'>
                <div className='w-[636px] text-center'><p className='text-[18px] font-normal font-main text-[#9397AD]'>Varius sed maecenas massa dictum viverra in. Viverra vel in elit, vivamus dui interdum. Nulla congue lobortis amet amet eleifend.</p></div>

                </div>

                {/* ------------ common-props */}
                <div className='pt-[80px] flex justify-center'>
                    <TransparentCommon />
                    <TransparentCommon />
                    <TransparentCommon />

                </div>

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Transparent