import React from 'react'
import CommonHead from './common/CommonHead'
import IntregateCommon from './common/IntregateCommon'
import color1 from '../assets/images/color1.png'
import color2 from '../assets/images/color2.png'
import color3 from '../assets/images/color3.png'
import color4 from '../assets/images/color4.png'
import color5 from '../assets/images/color5.png'
import color6 from '../assets/images/color6.png'
import color7 from '../assets/images/color7.png'
import color8 from '../assets/images/color8.png'

const Intregate = () => {
  return (
    <>
    <section id='intregate' className='py-[112px]'>
        <div className="container">
            <div className='flex justify-center'><CommonHead comh2={'Integrate Top Work Tools'} /></div>
            <div id='intregate-row'>
              <div className='flex justify-center'>
                <div className='w-[856px] text-center pt-[24px]'><p className='text-[18px] font-normal font-main text-[#9397AD]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p></div>

              </div>

                {/* ---------------- common-props */}
                <div className='flex flex-wrap gap-[24px] justify-center pt-[56px]'>
                  <IntregateCommon intelogo={color1} intep={'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.'}  />
                  <IntregateCommon intelogo={color2} intep={'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.'}  />
                  <IntregateCommon intelogo={color3} intep={'Id mollis consectetur congue egestas egestas suspendisse blandit justo.'}  />
                  <IntregateCommon intelogo={color4} intep={'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.'}  />
                  <IntregateCommon intelogo={color5} intep={'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.'}  />
                  <IntregateCommon  intelogo={color6} intep={'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.'} />
                  <IntregateCommon intelogo={color7} intep={'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.'}  />
                  <IntregateCommon intelogo={color8} intep={'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.'}  />
                </div>


            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Intregate