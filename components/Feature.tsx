import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className='flex md:px-20 md:pt-[6rem] bg-[#F7F8FA80] mobile:w-auto mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
      <div className='flex flex-col w-full mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-bold text-[55px] mb-[1rem] mobile:text-[32px]'>Why Flip</h2>
          <h3 className='text-xl mb-[5rem] mobile:text-[14px]'>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est sit donec sed vestibulum, rhoncus..</h3>
        </div>
        <div className='flex justify-between md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flex flex-col items-center justify-between px-5 py-[4rem] text-center bg-white shadow-xl rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='text-base font-normal'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flex flex-col items-center justify-between shadow-xl text-center px-5 py-[4rem] bg-white rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='text-base font-normal'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flex flex-col items-center justify-between shadow-xl text-center px-5 py-[4rem] bg-white rounded-2xl'>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
            <p className='text-base font-normal'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature