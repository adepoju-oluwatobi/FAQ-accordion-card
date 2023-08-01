import React from 'react'
import TopImg from '../assets/images/illustration-woman-online-mobile.svg';
import ArrDwn from '../assets/images/icon-arrow-down.svg'
import BgPattern from '../assets/images/bg-pattern-mobile.svg'

function FacCard() {
  return (
    <div className='w-[300px] h-[480px] bg-white rounded-3xl mt-[70px] shadow-lg'>
        <img className='relative w-[200px] -mt-[90px] ml-[48px] shadow-high' src={TopImg} alt="illustration-woman-online-mobile" />
        <img className='-mt-[25%] ml-[28px] z-[]' src={BgPattern} alt="" />
        <p className='text-3xl font-bold text-center mt-[20px]'>FAQ</p>
        <div className='mx-4 mt-[10px]'>
            <div className='flex items-center gap-8 p-2 py-4 border-b'>
                <p className='text-xs opacity-50'>How many team member can i invite?</p>
                <img src={ArrDwn} alt="" />
            </div>
            <div className='p-2 py-4 border-b'>
               <div className='flex items-center gap-8 '>
                 <p className='text-xs opacity-50'>What is the maximum file upload size?</p>
                <img src={ArrDwn} alt="" />
               </div>
               <p className='text-xs opacity-50 hidden'>Not more than 2GB. All files in your account must fix your allocated storage space.</p>
            </div>
            <div className='flex items-center gap-8 p-2 py-4 border-b'>
                <p className='text-xs opacity-50'>How many team member can i invite?</p>
                <img src={ArrDwn} alt="" />
            </div>
            <div className='flex items-center gap-8 p-2 py-4 border-b'>
                <p className='text-xs opacity-50'>How many team member can i invite?</p>
                <img src={ArrDwn} alt="" />
            </div>
            <div className='flex items-center gap-8 p-2 py-4 border-b'>
                <p className='text-xs opacity-50'>How many team member can i invite?</p>
                <img src={ArrDwn} alt="" />
            </div>
        </div>
    </div>
  )
}

export default FacCard