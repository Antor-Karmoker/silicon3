import React from 'react'

const IntregateCommon = ({intelogo , intep}) => {
  return (
    <>
    
    
    <div className='w-[306px] h-[205px] hover:shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)]'>
        <div className='py-[24px] pl-[24px]'><img src={intelogo} alt="" /></div>
        <div className='w-[258px] px-[24px]'><p className='text-[16px] font-main font-normal text-primary'>{intep}</p></div>

    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default IntregateCommon