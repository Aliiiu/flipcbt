import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className='md:pt-[6rem] bg-[#F7F8FA80] mobile:w-auto mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
      <div className='flex flex-col w-full mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-semibold text-[50px] mb-4 mobile:text-[32px]'>Why Flip</h2>
          <p className='text-sm mb-[5rem] text-[#4F4F4F]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sit donec sed vestibulum, rhoncus..
          </p>
        </div>
        <div className='flex justify-between md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flip-border flex flex-col items-center justify-between py-16 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/Time management.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flip-border flex flex-col items-center justify-between py-16 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/Time management.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
          <div className='flip-border flex flex-col items-center justify-between py-16 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/Time management.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>Flip is economical, accurate, time-bound
              and also have an effective security system.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature