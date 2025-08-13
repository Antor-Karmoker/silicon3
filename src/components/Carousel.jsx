import React from 'react'
import caroBanner from '../assets/images/caroBanner.png'
import caroimg1 from '../assets/images/MacBook Pro-light.png'
import caroimg2 from '../assets/images/Screen.png'

const Carousel = () => {
  return (
    <>
    
    
    <section  style={{  background: `URL(${caroBanner})`,  backgroundRepeat: `no-repeat`,  backgroundSize: `cover`,}} id='carousel' className='mt-[112px]' >
        <div className="container">
            <div id='carousel-row'>
                <div className='flex justify-center pt-[112px]'><h2 className='text-[40px] font-extrabold font-main text-[#fff]'>Switch Between L</h2><h2 className='text-[40px] font-extrabold font-main text-[#000]'>ight & Dark Mode</h2></div>
               

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default Carousel