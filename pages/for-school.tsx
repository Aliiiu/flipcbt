import Image from 'next/image';
import React, { Fragment, useEffect } from 'react';
import Link from 'next/link';
import Guarantee from '../components/Guarantee';
import Button from '../components/Button';
import FeatureForSchool from '../components/FeatureForSchool';
import GettingStartedForSchool from '../components/GettingStartedForSchool';
import Marketing from '../components/Marketing';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ForSchool = () => {
  useEffect(() => {
    const html = document.getElementById("mainHtml") as HTMLElement
    html.style.overflow = "auto";
  })
  return (
    <Fragment>
      <Navbar />
      <div className="ForSchool mt-[75px] md:px-20 xl:px-0 px-5" >
        <div className='container'>
          <div className='mobile:text-center py-[5em] md:py-15 pb-[5em] mobile:mt-0'>
            <h1 className='mobile:text-[28px] text-[40px] md:text-white md:text-[60px] xl:text-[85px] font-bold leading-[75px] xl:leading-[120px]'>Get Yourself <br className='mobile:hidden md:hidden lg:block'/> Prepared For <br className='mobile:hidden md:hidden lg:block'/> CBT Exams</h1>
            <p className='md:text-white md:mb-[2em] md:mt-[2em] lg:mb-[2em] lg:mt-[1em] xl:mb-[4em] xl:mt-[2em]'>Flip is a CBT software as a source to provide tests, <br className='mobile:hidden md:hidden lg:block' />
              examination management and quick grading
              system and <br className='mobile:hidden md:hidden lg:block'/>collation of results instead of the use of pen and paper.
            </p>
            <div className='flex mobile:mt-10 mobile:justify-center md:justify-start lg:justify-start'>
              <Link href="/">
                <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-5'>GET STARTED</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className='md:pt-[6em] mobile:pt-[1em]  text-center container'>
        <div>
          <h1 className='font-bold text-[24px] mt-9 mb-9 md:mb-[3em]'>Trusted By</h1>
          <div className='flex justify-between items-center mobile:justify-center flex-wrap md:px-20 xl:px-0'>
            <div className='mobile:mx-3 mobile:mb-7'>
              <Image src='/Coindesk 2.png' alt='Coindesk Logo 1' width='31.53px' height='29px'/>
              <Image src='/Coindesk 1.png' alt='Coindesk Logo 2' width='114.96px' height='29px'/>
            </div>
            <div className='mobile:mb-7'>
              <Image src='/reuters-logo 1.png' alt='reuters logo' width='154px' height='45.58px' />
            </div>
            <Image src='/coinTracker.png' alt='cointracker logo' width='148px' height='55.84px' />
          </div>
        </div>
      </section>
      <FeatureForSchool />
      <GettingStartedForSchool />
      <section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
        <div className='container flex flex-col items-center justify-center text-center space-y-7'>
          <h2 className='font-bold text-[40px] mobile:text-[28px] text-white'>Ready to get started?</h2>
          <p className='text-white w-7/12 mobile:w-full'>Marketing is the activity, institutions, and processes for creating, communicating,
            delivering, and exchanging, offerings that have value.</p>
          <Link href="#">
            <a className='text-white bg-black btn-border px-12 py-4 text-[14px]'>
              CLICK HERE
            </a>
          </Link>
        </div>
      </section>
      <Guarantee />
      <Footer />
    </Fragment>
  )
}

export default ForSchool