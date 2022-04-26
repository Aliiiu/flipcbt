import Image from 'next/image';
import React, {Fragment} from 'react';
import Button from '../components/Button';
import FeatureForSchool from '../components/FeatureForSchool';

const ForSchool = () => {
  return (
    <Fragment>
      <div className="ForSchool" >
        <div className='space-y-6 text-center py-[15rem] px-5 md:px-20 md:py-28 md:w-9/12 lg:w-7/12'>
          <h1 className='text-[40px] md:text-white md:text-[60px] font-bold'>Get Yourself Prepared For CBT Exams</h1>
          <p className='md:text-white'>Flip is a CBT software as a source to provide tests, examination management and quick grading
            system and collation of results instead of the use of pen and paper.
          </p>
          <Button />
        </div>
      </div>
      <section className='pt-5 md:px-20 text-center'>
        <h1 className='font-bold text-xl'>Trusted By</h1>
        <div className='flex justify-between items-center mobile:justify-center flex-wrap'>
          <div className='mobile:mx-3'>
            <Image src='/Coindesk 2.png' alt='Coindesk Logo 1' width='31.53px' height='29px'/>
            <Image src='/Coindesk 1.png' alt='Coindesk Logo 2' width='114.96px' height='29px'/>
          </div>
          <Image src='/reuters-logo 1.png' alt='reuters logo' width='154px' height='45.58px' />
          <Image src='/coinTracker.png' alt='cointracker logo' width='148px' height='55.84px' />
        </div>
      </section>
      <FeatureForSchool />
      <section className='flex md:px-20 md:pt-[2rem] bg-[#F7F8FA80] mobile:w-auto mobile:px-5'>
      <div className='flex flex-col w-full mobile:mx-0'>
        <div className='text-center'>
          <h2 className='font-bold text-5xl mb-[2rem]'>Getting started is free and easy</h2>
        </div>
        <div className='flex justify-between md:mx-auto md:mb-[10rem] md:space-x-6 mobile:flex-col mobile:space-y-6 mobile:mb-8'>
          <div className='flex flex-col items-center justify-between shadow-xl text-center px-5 py-[4rem] bg-white rounded-2xl'>
            <div className='rounded-full text-[32px] font-bold flex items-center justify-center bg-cyan-300 w-[100px] h-[100px]'>1</div>
            <h2 className='font-bold md:text-[32px]'>Add Questions</h2>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px' />
          </div>
          <div className='flex flex-col items-center justify-between shadow-xl text-center px-5 py-[4rem] bg-white rounded-2xl'>
            <div className='rounded-full text-[32px] font-bold flex items-center justify-center bg-cyan-300 w-[100px] h-[100px]'>2</div>
            <h2 className='font-bold md:text-[32px]'>Participant Engage <br className='mobile:hidden'/> using any device</h2>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
          </div>
          <div className='flex flex-col items-center justify-between shadow-xl text-center px-5 py-[4rem] bg-white rounded-2xl'>
            <div className='rounded-full text-[32px] font-bold flex items-center justify-center bg-cyan-300 w-[100px] h-[100px]'>3</div>
            <h2 className='font-bold md:text-[32px]'>Get Instant Result</h2>
            <Image src='/Time management.png' alt='Time management illustration' width='150px' height='150px'/>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default ForSchool