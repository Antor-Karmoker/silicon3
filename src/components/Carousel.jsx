// src/components/Carousel.jsx

import React from "react";
import caroBanner from "../assets/images/caroBanner.png";
import caroimg1 from "../assets/images/darkLaptop.png";
import caroimg2 from "../assets/images/WhiteLaptop.png";

import ReactCompareImage from "react-compare-image";

const Carousel = () => {
  return (
    <>
      <section
        style={{
          background: `url(${caroBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        id="carousel"
        className="mt-[112px]"
      >
        <div className="container mx-auto">
          <div id="carousel-row">
            <div className="flex justify-center pt-[112px]">
              <h2 className="text-[40px] font-extrabold font-main text-[#fff]">
                Switch Between L
              </h2>
              <h2 className="text-[40px] font-extrabold font-main text-[#000]">
                ight & Dark Mode
              </h2>
            </div>

            {/* Carousel slider */}
            <div className="flex justify-center">

            <div className="w-[700px] h-[450px] my-[48px] flex justify-center">
            <ReactCompareImage leftImage={caroimg1} rightImage={caroimg2} />;

            </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
