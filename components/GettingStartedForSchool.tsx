import React from 'react';
import Image from 'next/image';

const GettingStartedForSchool = () => {
  return (
    <section className='flex md:px-20 xl:px-0 pt-[6em] bg-[#F7F8FA80] mobile:w-auto mobile:px-5'>
      <div className='mx-auto mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-semibold text-[32px] md:text-[40px] mb-[2rem]'>Getting started is free and easy</h2>
        </div>
        <div className='grid grid-cols-3 mobile:grid-cols-1 gap-x-[3em] md:mb-[10rem] mobile:space-y-6 mobile:mb-8'>
          <div className='flex flex-col items-center text-center lg:px-[3em] mobile:py-[2em] md:py-[2rem] lg:py-[2rem] bg-white card'>
            <div className='rounded-full md:text-[40px] text-[36px] mb-8 font-semibold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>1</div>
            <h3 className='font-semibold lg:text-[25px] text-[20px] mobile:text-[24px] md:mb-[1em] lg:mb-10'>Add Questions</h3>
            <Image src='/addQuestions.png' alt='Time management illustration' width='250px' height='250px' />
          </div>
          <div className='flex flex-col items-center text-center lg:px-[3em] mobile:py-[2em] md:py-[2rem] lg:py-[2rem] bg-white card'>
            <div className='rounded-full md:text-[40px] text-[36px] mb-8 font-semibold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>2</div>
            <h3 className='font-semibold lg:text-[25px] mobile:text-[24px] text-[20px]'>Participant Engage <br className='mobile:hidden'/> using any device</h3>
            <Image src='/engagement.png' alt='Time management illustration' width='250px' height='250px'/>
          </div>
          <div className='flex flex-col items-center text-center lg:px-[3em] mobile:py-[2em] md:py-[2rem] lg:py-[2rem] bg-white card'>
            <div className='rounded-full md:text-[40px] text-[36px] mb-8 font-semibold flex items-center justify-center bg-[#0075FF] bg-opacity-10 w-[100px] h-[100px]'>3</div>
            <h3 className='font-semibold lg:text-[25px] mobile:text-[24px] text-[20px] md:mb-[2em] lg:mb-13'>Get Instant Result</h3>
            <Image src='/instantResult.png' alt='Time management illustration' width='250px' height='250px'/>
          </div>
        </div>
      </div>
      </section>
  )
}

export default GettingStartedForSchool