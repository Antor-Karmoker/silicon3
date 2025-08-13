import React from 'react'
import CommonHead from './components/common/CommonHead'
import ToolCommon from './components/common/ToolCommon'

const Tool = () => {
  return (
    <>
    
    <section id='tool' className='pt-[405px]'>
        <div className="container">
            <div className='text-center'><CommonHead comh2={'What Do You Get with Our Tool?'} /></div>
            <div  className='tool_row'>
                <div className='flex justify-center'>
                <div className='w-[636px] text-center pt-[24px] pb-[32px]'  ><p className='text-[18px] font-normal font-main text-[#9397AD]'>Make sure all your tasks are organized so you can set the priorities and focus on important.</p></div>
                </div>

{/* ----------------------------- div-tool */}
                <div className='flex flex-wrap justify-center'>
                <ToolCommon />
                <ToolCommon />
                <ToolCommon />
                <ToolCommon />
                <ToolCommon />
                <ToolCommon />
                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Tool