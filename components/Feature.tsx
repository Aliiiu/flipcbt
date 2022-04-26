import React from 'react';
import Image from 'next/image'

const Feature = () => {
  return (
    <section className='md:pt-[6rem] bg-[#F7F8FA80] mobile:w-auto px-20 mobile:px-5 mobile:bg-[#F7F8FA] mobile:pt-[4rem]'>
      <div className='container flex flex-col w-full mobile:mx-0'>
        <div className='text-center mb-[5rem]'>
          <h2 className='font-bold text-[40px] mb-4 mobile:text-[28px]'>Why <span className=''>Flip</span>?</h2>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sit donec sed vestibulum, rhoncus..
          </p>
        </div>
        <div className='grid md:grid-cols-3 mobile:grid-cols-1 md:mb-[9rem] md:space-x-6 mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flip-border flex flex-col items-center pt-10 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/Time management.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>The time consumed in having to create question papers, arranging supplies and
              evaluating scripts can be totally avoided as it automates the entire process. </p>
          </div>
          <div className='flip-border flex flex-col items-center pt-10 pb-4 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/convenience.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>Assessments  can be conducted all year round.
              Candidates can take tests at a time and place of their choosing.
              They do not need to travel to a particular physical location to write an exam,
              enabling candidates from far-off areas to attempt the test. </p>
          </div>
          <div className='flip-border flex flex-col items-center pt-10 px-8 text-center bg-white semi-blue-glow rounded-[30px]'>
            <Image src='/speedAndaccuracy.png' alt='Time management illustration' width='180px' height='180px'/>
            <p className='mt-9'>Unlike the PPT exams that most often contain errors in grading,
              FLIP has been designed to enable efficiency in giving out results..</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature