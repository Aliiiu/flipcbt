import Image from 'next/image';
import React, { Fragment } from 'react';
import Link from 'next/link';
import Guarantee from '../components/Guarantee';
import Button from '../components/Button';
import FeatureForSchool from '../components/FeatureForSchool';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Marketing from '../components/Marketing';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForSchool = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="ForSchool mt-[75px] mobile:ForSchool " >
        <div className='space-y-6 mobile:text-center py-[5em] px-5 md:px-20 md:py-15 md:w-9/12 lg:w-7/12 pb-[5em]'>
          <h1 className='text-[40px] md:text-white md:text-[60px] font-bold leading-[65px]'>Get Yourself Prepared For CBT Exams</h1>
          <p className='md:text-white md:w-8/12'>Flip is a CBT software as a source to provide tests, examination management and quick grading
            system and collation of results instead of the use of pen and paper.
          </p>
          <Button />
        </div>
      </div>
      <section className='md:pt-[7em] mobile:pt-[1em] md:px-20 text-center'>
        <h1 className='font-bold text-xl mt-9 mb-9 md:mb-[3em]'>Trusted By</h1>
        <div className='flex justify-between items-center mobile:justify-center flex-wrap md:w-10/12 md:mx-20'>
          <div className='mobile:mx-3 mobile:mb-7'>
            <Image src='/Coindesk 2.png' alt='Coindesk Logo 1' width='31.53px' height='29px'/>
            <Image src='/Coindesk 1.png' alt='Coindesk Logo 2' width='114.96px' height='29px'/>
          </div>
          <div className='mobile:mb-7'>
            <Image src='/reuters-logo 1.png' alt='reuters logo' width='154px' height='45.58px' />
          </div>
          <Image src='/coinTracker.png' alt='cointracker logo' width='148px' height='55.84px' />
        </div>
      </section>
      <FeatureForSchool />
      <GettingStartedForSchool />
      <Marketing />
      <Guarantee />
      <Footer />
    </Fragment>
  )
}

export default ForSchool