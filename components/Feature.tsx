import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className=' bg-[#F7F8FA80]'>
      <div className='md:pt-[6rem] mobile:w-auto mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem] container'>
        <div className='flex flex-col w-full mobile:mx-0'>
          <div className='text-center'>
            <h2 className='font-bold text-[55px] mb-[1rem] mobile:text-[32px]'>Why <span>Flip</span></h2>
            <h3 className='text-xl mb-[5rem] mobile:text-[14px]'>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Est sit donec sed vestibulum, rhoncus..</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5  gap-y-8 md:gap-y-14 md:px-20 md:mb-[9rem] mobile:flex-col mobile:space-y-6 mobile:mb-8'>
            <div className='flex flex-col items-center justify-between p-[30px] text-center bg-white semi-blue-glow rounded-2xl'>
              <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
              <p className='mt-9 text-[15px] lg:text-[20px] font-normal'>Flip is economical, accurate, time-bound
                and also have an effective security system.</p>
            </div>
            <div className='flex flex-col items-center justify-between semi-blue-glow text-center p-[30px] bg-white rounded-2xl'>
              <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
              <p className='mt-9 text-[15px] lg:text-[20px] font-normal '>Flip is economical, accurate, time-bound
                and also have an effective security system.</p>
            </div>
            <div className='flex flex-col items-center justify-between semi-blue-glow text-center p-[30px] bg-white rounded-2xl'>
              <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
              <p className='mt-9 text-[15px] lg:text-[20px] font-normal'>Flip is economical, accurate, time-bound
                and also have an effective security system.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature