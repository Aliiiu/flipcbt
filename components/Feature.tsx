import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className='md:pt-[6rem] bg-[#F7F8FA80] mobile:w-auto mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
      <div className='flex flex-col w-full mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-bold text-[55px] mb-[1rem] mobile:text-[32px]'>Why Flip</h2>
          <h3 className='text-xl mb-[5rem] mobile:text-[14px]'>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est sit donec sed vestibulum, rhoncus..</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-14 gap-y-8 md:gap-y-14 md:px-20 md:mb-[9rem] mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flex flex-col md:mr-4 items-center justify-between p-[30px] text-center bg-white shadow-[0px_20px_40px_rgba(0,117,255,0.1)] rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='mt-9 text-[20px] font-normal'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flex flex-col md:mr-4 items-center justify-between shadow-[0px_20px_40px_rgba(0,117,255,0.1)] text-center p-[30px] bg-white rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='mt-9 text-[20px] font-normal '>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flex flex-col items-center justify-between shadow-[0px_20px_40px_rgba(0,117,255,0.1)] text-center p-[30px] bg-white rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='mt-9 text-[20px] font-normal'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature