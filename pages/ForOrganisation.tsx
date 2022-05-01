import React, { Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.svg'
import profile2 from '../public/profile2.svg'
import FeatureOrganisation from '../components/FeatureOrganisation';
import BenefitOrganisation from '../components/BenefitOrganisation';
import Guarantee from '../components/Guarantee';

const ForOrganisation = () => {
  return (
    <Fragment>
      <div className='homePage md:px-20 px-4 mt-[78px] mobile:mt-[83px]'>
          <section className="relative mobile:text-center lg:pb-[5em] ForOrganisation container">
            <div className='lg:flex mobile:w-auto w-full md:pb-[8em] md:pt-[4em] lg:py-0'>
              <div className='flex lg:w-1/2 mobile:w-full flex-col mt-14 mobile:py-[5em] '>
                <h1 className='lg:text-[52px] md:text-[45px] mobile:text-[28px] header lg:w-10/12 mb-[20px] lg:text-left text-center'>
                  We Design and Implement an online computer-based test system. 
                </h1>
                <p className='lg:w-10/12 text-[20px] mb-[1em] mobile:text-[18px]'>
                  FLIP serves as a source to provide tests, examination management,
                  quick grading of systems and collation of results instead of the use of pen and paper.
                </p>
                <div className='flex mobile:justify-center md:justify-center lg:justify-start'>
                  <Link href="/">
                    <a className='py-3 text-base text-white bg-[#0075FF] btn-border px-[4rem] md:py-6'>GET STARTED</a>
                  </Link>
                </div>
              </div>
              <div className='w-6/12 lg:block md:hidden mobile:hidden'>
              </div>
            </div>
            <div className='absolute right-[320px] mobile:invisible md:invisible lg:visible flex px-10 py-2 bg-white flip-border bottom-[55px] rounded-lg blue-glow'>
              <Image src={profile2} alt='profile badge' width="55px" height="55px" />
              <div className='flex flex-col ml-3'>
                <h1 className='text-[30px] text-[#FFBC6C] font-semibold'>50K</h1>
                <p>Total Active Student</p>
              </div>
            </div>
            <div className='absolute right-[0px] mobile:invisible md:invisible lg:visible flex px-10 py-2 bg-white flip-border bottom-[160px] rounded-lg blue-glow'>
              <Image src={profile} alt='profile badge' width="55px" height="55px" />
              <div className='flex flex-col ml-3'>
                <h1 className='text-[30px] text-[#00BE7E] font-semibold'>7.5K</h1>
                <p>Total Active Task</p>
              </div>
            </div>
          </section>
        </div>
      <FeatureOrganisation />
      <BenefitOrganisation />
      <section className="md:px-20 mobile:px-4 py-20 bg-[url('/FlipCbtBg2.png')] bg-contain bg-[#0075FF] bg-opacity-90">
      <div className='container flex flex-col items-center justify-center text-center space-y-7'>
        <h2 className='font-bold text-[40px] mb-4 mobile:text-[28px] text-white'>Ready to get started?</h2>
        <p className='text-white'>Marketing is the activity, institutions, and processes for creating, communicating,
          delivering, and exchanging, offerings that have value.</p>
        <Link href="#">
          <a className='text-base text-white bg-black btn-border px-12 py-4 text-[14px]'>
            APPLY NOW
          </a>
        </Link>
      </div>
      </section>
      <Guarantee />
    </Fragment>
  )
}

export default ForOrganisation