import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className='md:pt-[6rem] bg-[#F7F8FA80] mobile:w-auto px-20 mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
      <div className='container flex flex-col w-full mobile:mx-0'>
        <div className='text-center mb-[5rem]'>
          <div className='flex justify-center'>
            <div className='pr-[4em]'>
              <h2 className='inline-block z-10 relative mobile:left-[60px]  md:left-[88px] font-bold text-[40px] mb-4 mobile:text-[28px]'>Why Flip?</h2>
              <span className='inline-block bg-[rgba(0,117,255,0.5)] rounded-[8px] w-[45px] md:w-[80px] mobile:h-[14px] md:h-[20px]'></span>
            </div>
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sit donec sed vestibulum, rhoncus..
          </p>
        </div>
        <div className='grid md:grid-cols-3 mobile:grid-cols-1 md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flip-border flex flex-col items-center pt-10 px-3 mobile:pb-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            
            <Image src='/time management.png' alt='Time management illustration' width='250px' height='250px' />
            <h3 className='text-[15px] font-semibold text-[#0075FF] mt-6 md:uppercase'>Time Saving</h3>
            <p className='mt-6'>The time consumed in having to create question papers, arranging supplies and
              evaluating scripts can be totally avoided as it automates the entire process. </p>
          </div>
          <div className='flip-border flex flex-col items-center pt-10 pb-8 px-3 text-center bg-white semi-blue-glow rounded-[30px]'>
            
            <Image src='/convenience2.png' alt='Time management illustration' width='250px' height='250px' />
            <h3 className='text-[15px] font-semibold text-[#0075FF] mobile:mt-6 md:mt-12 lg:mt-6 md:uppercase'>Convenience</h3>
            <p className='mt-6'>Candidates can take tests at a time and place of their choosing.
              They do not need to travel to a particular physical location to write an exam,
              enabling candidates from far-off areas to attempt the test. </p>
          </div>
          <div className='flip-border flex flex-col items-center pt-10 px-3 mobile:pb-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            
            <Image src='/speed.png' alt='Time management illustration' width='250px' height='250px' />
            <h3 className='text-[15px] font-semibold text-[#0075FF] md:mt-12 mobile:mt-6 lg:mt-6 md:uppercase'>Speed and Accuracy</h3>
            <p className='mt-6'>Unlike the PPT exams that most often contain errors in grading,
              FLIP has been designed to enable efficiency in giving out results..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature