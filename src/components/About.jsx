import React from 'react'
import CommonHead from './common/CommonHead'
import AboutCommon from './common/AboutCommon'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

const About = () => {

  const settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 600,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
      nextArrow: < MdArrowBackIosNew />,
    prevArrow: <IoIosArrowForward />
  };


  return (
    <>
    
    
    
    <section id='about' className='pt-[112px] flex'>
        <div className="container">
          <div className=''>

                <div className='w-[250px]'><CommonHead comh2={'What People Say About Us'} /></div>

   <div className="slider-container mt-[-164px] pl-[400px]">
 
             <Slider {...settings}>
      <div>
          <AboutCommon />
      </div>
      <div>
      <AboutCommon />
      </div>
      <div>
         <AboutCommon />
      </div>
           <div>
         <AboutCommon />
      </div>


    </Slider>
    </div>


          </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default About