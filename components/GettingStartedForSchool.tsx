import React from 'react';
import Image from 'next/image';

const GettingStartedForSchool = () => {
  return (
    <section className='flex md:px-20 pt-[2rem] bg-[#F7F8FA80] mobile:w-auto mobile:px-5'>
      <div className='mx-auto mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-bold text-[32px] lg:text-[55px] mb-[2rem]'>Getting started is free and easy</h2>
        </div>
        <div className='grid grid-cols-3 mobile:grid-cols-1 gap-x-8 md:mb-[10rem] mobile:space-y-6 mobile:mb-8'>
          <div className='flex flex-col items-center text-center lg:px-5 mobile:py-[2em] md:py-[2rem] lg:py-[4rem] bg-white card'>
            <div className='rounded-full md:text-[48px] text-[36px] mb-8 font-bold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>1</div>
            <h2 className='font-bold lg:text-[32px] text-[23px] mobile:text-[24px] md:mb-[1em] lg:mb-10'>Add Questions</h2>
            <Image src='/addQuestions.png' alt='Time management illustration' width='300px' height='300px' />
          </div>
          <div className='flex flex-col items-center text-center lg:px-5 mobile:py-[2em] md:py-[2rem] lg:py-[4rem] bg-white card'>
            <div className='rounded-full md:text-[48px] text-[36px] mb-8 font-bold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>2</div>
            <h2 className='font-bold lg:text-[32px] mobile:text-[24px] text-[23px]'>Participant Engage <br className='mobile:hidden'/> using any device</h2>
            <Image src='/engagement.png' alt='Time management illustration' width='300px' height='300px'/>
          </div>
          <div className='flex flex-col items-center text-center px-5 mobile:py-[2em] md:py-[2rem] lg:py-[4rem] bg-white card'>
            <div className='rounded-full md:text-[48px] text-[36px] mb-8 font-bold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>3</div>
            <h2 className='font-bold lg:text-[32px] mobile:text-[24px] text-[23px] md:mb-[2em] lg:mb-16'>Get Instant Result</h2>
            <Image src='/instantResult.png' alt='Time management illustration' width='300px' height='300px'/>
          </div>
        </div>
      </div>
      </section>
  )
}

export default GettingStartedForSchool