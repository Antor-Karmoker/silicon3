import React from 'react'
import CommonHead from './common/CommonHead'
import AboutCommon from './common/AboutCommon'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
      nextArrow: <IoArrowForwardSharp />,
    prevArrow: <IoArrowBackOutline />
  };


  return (
    <>
    
    
    
    <section id='about' className='pt-[112px]'>
        <div className="container">
            <div id='about-row' className='flex gap-[80px]'>

                <div className='w-[250px]'><CommonHead comh2={'What People Say About Us'} /></div>




                <div className='flex gap-[24px]'>
                    <AboutCommon />
                    <AboutCommon />
                    <AboutCommon />
                </div>

            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default About