import Image from 'next/image';
import React, { Fragment } from 'react';
import Link from 'next/link';
import Guarantee from '../components/Guarantee';
import Button from '../components/Button';
import FeatureForSchool from '../components/FeatureForSchool';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Marketing from '../components/Marketing';

const ForSchool = () => {
  return (
    <Fragment>
      <div className="ForSchool mobile:ForSchool" >
        <div className='space-y-6 text-center py-[10rem] px-5 md:px-20 md:py-28 md:w-9/12 lg:w-7/12'>
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
      <GettingStartedForSchool />
      <Marketing />
      <Guarantee />
    </Fragment>
  )
}

export default ForSchool